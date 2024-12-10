<?php

namespace App\Http\Controllers;

use App\Models\AffiliateProgram;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AffiliateProgramController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $programs = AffiliateProgram::all();
        return Inertia::render('Dashboard/Programs/index', [
            'programs' => $programs,
        ]);
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
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
        ]);

        $affiliateProgram =    AffiliateProgram::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
        ]);

        return back()->with('success', 'Affiliate Program created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(AffiliateProgram $affiliateProgram)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AffiliateProgram $affiliateProgram)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, AffiliateProgram $affiliateProgram)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        
        $program = AffiliateProgram::findOrFail($id);
        $program->delete();

        return redirect()->route('programs.index')->with('success', 'Affiliate Program deleted successfully!');
    }
}
