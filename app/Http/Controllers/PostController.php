<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::where('type',request('type'))->get();
        return Inertia::render('Dashboard/Posts/index', ['posts' => $posts]); 

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/Posts/create', ['type' => request('type')]); 

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'required|string',
        'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        'type' => 'required|string',
    ]);

    // Handle image upload
    if ($request->hasFile('image')) {
        $imagePath = $request->file('image')->store('images', 'public');
        $validated['image'] = $imagePath;
    }

    // Create a new post
    Post::create($validated);

    return redirect()->route('posts.index' , ['type' => $validated['type']])->with('success', 'Post created successfully');
}

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return Inertia::render('Dashboard/Posts/show', ['post' => $post]); 

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return Inertia::render('Dashboard/Posts/edit', ['post' => $post]); 
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $post = Post::findOrFail($id);
    
        // Handle the image upload
        
        $post->update([
            'title' => $validated['title'],
            'description' => $validated['description'],
        ]);
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
            $validated['image'] = $imagePath;
            $post->image = $validated['image'];
            $post->save();
        }
    
        return redirect()->route('posts.index', ['type' => $post->type])->with('success', 'Post updated successfully');
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return redirect()->back()->with('success', 'Post deleted successfully');
    }
}
