<?php

namespace App\Http\Controllers;

use App\Models\Section;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Storage;

class SectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Section $section)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $section = Section::find($id);
        $section->content = json_decode($section->content, true);
        if($section['name']=== 'privacy' ){
            return Inertia::render('Dashboard/Sections/privacyEdit', ['section' => $section]);
        }
        if($section['name']=== 'refund' ){
            return Inertia::render('Dashboard/Sections/refundEdit', ['section' => $section]);
        }
        return Inertia::render('Dashboard/Sections/edit', ['section' => $section]); 
    }

    /**
     * Update the specified resource in storage.
     */
  
public function update(Request $request, Section $section)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'content' => 'required|array',
        'image' => 'nullable|file|image|max:4048', // Validate image upload
    ]);

    // Decode current content to update it
    $content = $validated['content'];

    if ($request->hasFile('image')) {
        // Delete old image if it exists in content
        if (isset($section->content['image']) && Storage::exists($section->content['image'])) {
            Storage::delete($section->content['image']);
        }

        // Store the new image
        $content['image'] = $request->file('image')->store('sections', 'public');
    }

    $section->update([
        'name' => $validated['name'],
        'content' => json_encode($content), // Save updated content
    ]);

    return redirect()->route('sections.index')->with('success', 'Section updated successfully!');
}
public function updatePrivacyPolicy(Request $request, $id)
{
    // Validate the incoming request data
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'header' => 'required|string|max:255',
        'description' => 'nullable|string',
        'html_content' => 'required|string',
    ]);

    // Find the section by ID
    $section = Section::findOrFail($id);

    // Update the content field with the new values
    $section->content = json_encode([
        'title' => $validated['title'],
        'header' => $validated['header'],
        'description' => $validated['description'],
        'html_content' => $validated['html_content'],
    ]);

    // Save the section
    $section->save();

    // Redirect or return a response
    return back()->with('success', 'Privacy Policy updated successfully!');
}
public function updateRefund(Request $request, $id)
{
    // Validate the incoming request data
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'header' => 'required|string|max:255',
        'description' => 'nullable|string',
        'html_content' => 'required|string',
    ]);

    // Find the section by ID
    $section = Section::findOrFail($id);

    // Update the content field with the new values
    $section->content = json_encode([
        'title' => $validated['title'],
        'header' => $validated['header'],
        'description' => $validated['description'],
        'html_content' => $validated['html_content'],
    ]);

    // Save the section
    $section->save();

    // Redirect or return a response
    return back()->with('success', 'Privacy Policy updated successfully!');
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Section $section)
    {
        //
    }
}
