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

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Section $section)
    {
        //
    }
}