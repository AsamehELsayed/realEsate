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
        // Get the existing settings or create a new one if not found
        $settings = Setting::first();

        if (!$settings) {
            // If no settings exist, create a new one
            $settings = new Setting();
        }

        // Handle logo file upload if present
        $logoPath = null;
        if ($request->hasFile('logo')) {
            $logoPath = $request->file('logo')->store('logos', 'public');  // Store logo in public/logos
        }

        // Prepare settings data
        $settingsData = [
            'main_color' => $request->main_color,
            'secondary_color' => $request->secondary_color,
            'bg_color' => $request->bg_color,
            'main_font_color' => $request->main_font_color,
            'secondary_font_color' => $request->secondary_font_color,
            'website_name' => $request->website_name,
            'facebook' => $request->facebook,
            'linkedin' => $request->linkedin,
            'email' => $request->email,
            'phone' => $request->phone,
            'footer_text' => $request->footer_text,
            'footer_description' => $request->footer_description
        ];

        // If logo is uploaded, add it to settings data
        if ($logoPath) {
            $settingsData['logo'] = $logoPath;
        }

        // Log the data to check if it's being prepared correctly

        // Update the settings data

        $settings->data = json_encode($settingsData);
        $settings->save();

        return redirect()->back()->with('success', 'Settings updated successfully!');


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
