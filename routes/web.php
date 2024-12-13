<?php

use App\Http\Controllers\AffiliateProgramController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PriceController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\SettingController;
use App\Models\Price;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use \App\Models\Section;
use Inertia\Inertia;
use Stripe\Stripe;

Route::post('/create-checkout-session', function (Illuminate\Http\Request $request) {
    Stripe::setApiKey(config('services.stripe.secret'));

    // Retrieve the total price and features from the request
    $total = $request->input('total');
    $features = $request->input('features'); // Get features from the request

    // Create a Product if not already created on Stripe
    // Optional: You can also create products programmatically if not already present in Stripe
    $product = \Stripe\Product::create([
        'name' => 'Monthly Subscription',
        'description' => 'Features: ' . implode(' ', $features), // Include features in the description
    ]);

    // Create the Price for the monthly subscription
    $price = \Stripe\Price::create([
        'unit_amount' => $total * 100,  // Convert to cents
        'currency' => 'usd',
        'recurring' => ['interval' => 'month'], // This specifies the subscription is monthly
        'product' => $product->id,
    ]);

    // Create a Stripe Checkout session for subscription
    $session = \Stripe\Checkout\Session::create([
        'payment_method_types' => ['card'],
        'line_items' => [[
            'price' => $price->id,
            'quantity' => 1,
        ]],
        'mode' => 'subscription',
        'success_url' => url('3'),
        'cancel_url' => url('/payment-cancel'),
        'billing_address_collection' => 'auto', // Prompt for billing address
        'metadata' => [
            'features' => implode(', ', $features), // Pass additional data for tracking
        ],
        'client_reference_id' => 'unique_user_id', // Track the customer
        'locale' => 'en', // Set the locale for the checkout page
    ]);
    

    // Return the session ID
    return response()->json(['id' => $session->id]);
});

Route::get('stripe', function () {
    return Inertia::render('paymentTest');
});
Route::get('/', function () {
    $hero = Section::where('name', 'hero')->first();
    $hero->content = json_decode($hero->content, true);
    $capabilities = Section::where('name', 'Capabilities')->first();
    $capabilities->content = json_decode($capabilities->content, true);
    $Affiliate_Program = Section::where('name', 'Affiliate_Program')->first();
    $Affiliate_Program->content = json_decode($Affiliate_Program->content, true);
    $prices= Price::all();
    $prices->each(callback: function ($price) {
        $price->features = json_decode($price->features, true);
    });
    $plans = Section::where('name', 'Plans')->first();
    $plans->content = json_decode($plans->content, true);
     return Inertia::render('Welcome', [
        'hero' => $hero,
        'Affiliate_Program' => $Affiliate_Program,
        'capabilities' => $capabilities,
        'prices' => $prices,
        'plans' => $plans
    ]);
});
Route::resource('contacts', ContactController::class)->only('store');
Route::resource('programs', AffiliateProgramController::class)->only('store');
Route::resource('chats', ChatController::class)->only('store');

Route::post('/sendMessageGuest', [ChatController::class, 'sendMessageGuest'])->name('sendMessageGuest');
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::resource('chats', ChatController::class)->except('store');
    Route::post('/sendMessage', [ChatController::class, 'sendMessage'])->name('sendMessage');
    Route::resource('prices', PriceController::class);
    Route::resource('contacts', ContactController::class)->only(['index', 'create', 'show', 'edit', 'update', 'destroy']);
    Route::resource('programs', AffiliateProgramController::class)->only(['index', 'create', 'show', 'edit', 'update', 'destroy']);
    Route::resource('sections', SectionController::class)->only(['index', 'create', 'show', 'edit', 'update', 'destroy']);
    Route::resource('settings', SettingController::class);
});

require __DIR__.'/auth.php';
