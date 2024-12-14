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
            'name' => 'suber admin',
            'phone' => '123456789',
            'is_admin' => true,
            'image' => 'images/hero_1.jpg',
            'email' => 'admin@aliecallers.com',
            'password' => Hash::make('X^g0k<d!3!5ThN)56$54'),
        ]);
    }
}
