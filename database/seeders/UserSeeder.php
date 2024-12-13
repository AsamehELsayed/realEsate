<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'admin',
            'phone' => '123456789',
            'image' => 'images/hero_1.jpg',
            'email' => 'admin@localhost',
            'password' => Hash::make('123456789'),
        ]);
    }
}
