<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Retrieve the first settings entry
        $settings = Setting::first();

        // Check if settings exist and decode the JSON data manually
        $decodedSettings = $settings ? json_decode($settings->data, true) : null;

        // Pass decoded settings to the Inertia view
        return Inertia::render('Dashboard/settings/edit', [
            'settings' => $decodedSettings,
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
        // Validate the incoming request
        $request->validate([
            'main_color' => 'required|string',
            'secondary_color' => 'required|string',
            'main_font_color' => 'required|string',
            'secondary_font_color' => 'required|string',
            'bg_color' => 'required|string',
            'website_name' => 'required|string|max:255',
            'logo' => 'sometimes|image|max:5000',  // Validate logo as an image
            'facebook' => 'nullable|url|max:255',
            'linkedin' => 'nullable|url|max:255',
            'email' => 'nullable|email|max:255',
            'phone' => 'nullable|string|max:255',
            'footer_text' => 'nullable|string|max:255',
            'footer_description' => 'nullable|string|max:1000',
        ]);
    
        // Get the existing settings
        $settings = Setting::first();
    
        if ($settings) {
            // Handle logo file upload
            $logoPath = null;
            if ($request->hasFile('logo')) {
                $logoPath = $request->file('logo')->store('logos', 'public');  // Store logo in public/logos
            }
    
            // Update the settings with form data and logo path (if uploaded)
            $settings->data = json_encode([
                'main_color' => $request->main_color,
                'secondary_color' => $request->secondary_color,
                'bg_color' => $request->bg_color,
                'main_font_color' => $request->main_font_color,
                'secondary_font_color' => $request->secondary_font_color,
                'website_name' => $request->website_name,
                'logo' => $logoPath,  // Store the file path in the database
                'facebook' => $request->facebook,
                'linkedin' => $request->linkedin,
                'email' => $request->email,
                'phone' => $request->phone,
                'footer_text' => $request->footer_text,
                'footer_description' => $request->footer_description
            ]);
    
            $settings->save();
    
            return redirect()->back()->with('success', 'Settings updated successfully!');
        }
    }
    
    /**
     * Display the specified resource.
     */
    public function show(Setting $setting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    // app/Http/Controllers/SettingsController.php









    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Setting $setting)
    {
        //
    }
}
