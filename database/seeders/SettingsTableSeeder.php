<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('settings')->insert([
            'data' => json_encode([
                'main_color' => '#ffffff',
                'secondary_color' => '#1891d8',
                'bg_color' => '#f7f7f7',
                'main_bg_image' => 'sections/hero_1.jpg',
                'main_font_color' => '#000000', // Added main font color
                'secondary_font_color' => '#555555', // Added secondary font color
                 'website_name' => 'Alie Callers',
                'logo' =>'\logos\defaultlogo.jpg',
                'facebook' => 'https://facebook.com/yourpage',
                'linkedin' => 'https://linkedin.com/yourprofile',
                'email' => 'your-email@example.com',
                'auto_message' => 'Welcome to our website! We are excited to have you here.',
                'phone' => '123-456-7890',
                'footer_text' => '© 2023 Your Company. All rights reserved.',
                'footer_description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
            ]),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
