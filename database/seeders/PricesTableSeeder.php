<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Price;

class PricesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // بيانات الخطة الأساسية
        Price::create([
            'name' => 'Basic Plan',
            'description' => 'A simple plan for small businesses.',
            'price' => 19.99,
      
            'features' => json_encode(['Access to basic features', 'Email support']),
        ]);

        // بيانات الخطة الاحترافية
        Price::create([
            'name' => 'Pro Plan',
            'description' => 'A comprehensive plan for growing businesses.',
            'price' => 49.99,
        
            'features' => json_encode(['Access to all features', 'Priority support', 'Analytics dashboard']),
        ]);

        // بيانات الخطة المؤسسية
        Price::create([
            'name' => 'Enterprise Plan',
            'description' => 'A customizable plan for large organizations.',
            'price' => 199.99,
    
            'features' => json_encode(['Dedicated account manager', 'Custom integrations', 'Unlimited access']),
        ]);
    }
}
