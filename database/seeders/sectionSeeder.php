<?php

namespace Database\Seeders;
use App\Models\Section;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class sectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       Section::create([
        'name' => 'hero',
        'content' => json_encode([
            'title' => 'title',
            'header'=> 'header',
            'description' => 'description',
            'image' => 'images/hero_1.jpg',
        ]),
      
       ]);
       Section::create([
        'name' => 'Affiliate_Program',
        'content' => json_encode([
            'title' => 'title',
            'header'=> 'header',
            'sub_header' => 'sub_header',
            'third_header' => 'third_header',
            'description' => 'description',
            'image' => 'images/hero_1.jpg',
        ]),
      
       ]);
     
       Section::create(attributes: [
        'name' => 'Capabilities',
        'content' => json_encode([
            'header'=> 'Capabilities',
            'capabilities_one' =>  ['title' => 'title 1', 'description' => 'description 1'],
            'capabilities_two' =>  ['title' => 'title 2', 'description' => 'description 2'],
            'capabilities_three' =>  ['title' => 'title 3', 'description' => 'description 3'],
        ]),
      
       ]);
     
    }
}
