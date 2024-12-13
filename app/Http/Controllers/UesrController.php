<?php

namespace App\Http\Controllers;

use App\Models\User;
use Hash;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Storage;

class UesrController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return Inertia::render('Dashboard/User/index', [
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/User/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate incoming request data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email',
            'phone' => 'nullable|string|max:15',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'password' => 'required|string|min:8|confirmed', // Password and confirmation validation
        ]);

        // Create new user
        $user = new User();
        $user->name = $validated['name'];
        $user->email = $validated['email'];
        $user->phone = $validated['phone'];
        $user->password = Hash::make($validated['password']); // Hash the password

        // Handle profile picture upload
        if ($request->hasFile('image')) {
            $user->image = $request->file('image')->store('profile_pictures', 'public');
        }

        // Save the user
        $user->save();

        // Return a success response
        return redirect()->route('users.index')->with('success', 'User created successfully!');
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::find($id);
        return Inertia::render('Dashboard/User/edit', [
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        // Validate incoming request data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $user->id,
            'phone' => 'nullable|string|max:15',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'password' => 'nullable|string|min:8|confirmed',
        ]);

        // Check if the current password is correct
     

        // Update user details
        $user->name = $validated['name'];
        $user->email = $validated['email'];
        $user->phone = $validated['phone'];

        // Update password if provided
        if ($request->filled('password')) {
            $user->password = Hash::make($validated['password']);
        }

        // Handle profile picture upload
        if ($request->hasFile('image')) {
            // Delete old profile picture if exists
            if ($user->image && Storage::exists($user->image)) {
                Storage::delete($user->image);
            }
            $user->image = $request->file('image')->store('profile_pictures', 'public');
        }

        // Save the user
        $user->save();

        // Return a success response
        return redirect()->route('users.index')->with('success', 'User created successfully!');
    }
        /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
