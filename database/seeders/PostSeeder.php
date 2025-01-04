<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $faker = Faker::create();

        // Post types
        $postTypes = ['feature', 'capability', 'article', 'posts'];

        // Seed posts
        foreach ($postTypes as $type) {
            DB::table('posts')->insert([
                'title' => $faker->sentence,
                'description' => $faker->paragraph,
                'image' => $faker->imageUrl(640, 480, 'business', true), // Generates a fake image URL
                'type' => $type,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
