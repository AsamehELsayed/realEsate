<?php

use App\Http\Controllers\AffiliateProgramController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PriceController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\UesrController;
use App\Models\Post;
use App\Models\Price;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use \App\Models\Section;
use Inertia\Inertia;
// use Stripe\Stripe;
// Route::post('/create-checkout-session', function (Illuminate\Http\Request $request) {
//     Stripe::setApiKey(config('services.stripe.secret'));

//     // Retrieve the total price and features from the request
//     $total = $request->input('total'); // This should be the price for one unit
//     $features = $request->input('features'); // Get features from the request
//     $quantity = $request->input('quantity', 1); // Get quantity from the request
//     // Create a Product if not already created on Stripe
//     $product = \Stripe\Product::create([
//         'name' => 'Monthly Subscription',
//         'description' => 'Features: ' . implode('-', $features), // Include features in the description
//     ]);

//     // Create the Price for the monthly subscription
//     $price = \Stripe\Price::create([
//         'unit_amount' => $total * 100,  // Convert to cents (price for one unit)
//         'currency' => 'usd',
//         'recurring' => ['interval' => 'month'], // This specifies the subscription is monthly
//         'product' => $product->id,
//     ]);

//     // Create a Stripe Checkout session for subscription
//     $session = \Stripe\Checkout\Session::create([
//         'payment_method_types' => ['card'],
//         'line_items' => [[
//             'price' => $price->id,
//             'quantity' => $quantity, // Only apply quantity here
//         ]],
//         'mode' => 'subscription',
//         'success_url' => url('/payment-success'),
//         'cancel_url' => url('/'),
//         'billing_address_collection' => 'auto', // Prompt for billing address
//         'metadata' => [
//             'features' => implode(', ', $features), // Pass additional data for tracking
//         ],
//         'client_reference_id' => 'unique_user_id', // Track the customer
//         'locale' => 'en', // Set the locale for the checkout page
//     ]);

//     // Return the session ID
//     return response()->json(['id' => $session->id]);
// });


Route::get('/', function () {
    $hero = Section::where('name', 'hero')->first();
    $hero->content = json_decode($hero->content, true);
    $capabilities = Post::where('type', 'capability')->get();
    // $capabilities->content = json_decode($capabilities->content, true);
    // dd($capabilities);
    $Affiliate_Program = Section::where('name', 'Affiliate_Program')->first();
    $Affiliate_Program->content = json_decode($Affiliate_Program->content, true);
    $prices = Price::all();
    $prices->each(callback: function ($price) {
        $price->features = json_decode($price->features, true);
    });
    $book_a_meeting = Section::where('name', 'book_a_meeting')->first();
    $book_a_meeting->content = json_decode($book_a_meeting->content, true);
    $plans = Section::where('name', 'Plans')->first();
    $plans->content = json_decode($plans->content, true);
    $features = Post::where('type', 'feature')->get();
    return Inertia::render('Welcome', [
        'hero' => $hero,
        'Affiliate_Program' => $Affiliate_Program,
        'capabilities' => $capabilities,
        'prices' => $prices,
        'plans' => $plans,
        'features' => $features,
        'book_a_meeting' => $book_a_meeting
    ]);
})->name('home');
Route::get('/Affiliate_Program', function () {
    $Affiliate_Program = Section::where('name', 'Affiliate_Program')->first();
    $Affiliate_Program->content = json_decode($Affiliate_Program->content, true);
    return Inertia::render('Guest/Program', [
        'Affiliate_Program' => $Affiliate_Program
    ]);
})->name('Affiliate_Program');
Route::get('/plans', function () {
    $plans = Section::where('name', 'Plans')->first();
    $plans->content = json_decode($plans->content, true);
    $prices = Price::all();
    $prices->each(callback: function ($price) {
        $price->features = json_decode($price->features, true);
    });
    return Inertia::render('Guest/Plans', [
        'plans' => $plans,
        'prices' => $prices
    ]);
})->name('plans');
Route::get('/contact-us', function () {
    return Inertia::render('Guest/contactUs');
})->name('contact-us');
Route::get('/book-a-meeting', function () {
    return Inertia::render('Guest/Calendly');
})->name('calendly');
Route::get('/privacy', function () {
    $privacy = Section::where('name', 'Privacy')->first();
    $privacy->content = json_decode($privacy->content, true);
    return Inertia::render('Guest/privacy', [
        'privacy' => $privacy
    ]);
})->name('privacy');
Route::get('/refund', function () {
    $privacy = Section::where('name', 'refund')->first();
    $privacy->content = json_decode($privacy->content, true);
    return Inertia::render('Guest/refund', [
        'privacy' => $privacy
    ]);
})->name('refund');

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
    Route::resource('users', UesrController::class);
    Route::resource('posts', PostController::class);
    Route::resource('contacts', ContactController::class)->only(['index', 'create', 'show', 'edit', 'update', 'destroy']);
    Route::resource('programs', AffiliateProgramController::class)->only(['index', 'create', 'show', 'edit', 'update', 'destroy']);
    Route::put('/updatePrivacyPolicy/{id}', [SectionController::class, 'updatePrivacyPolicy'])->name('updatePrivacyPolicy');
    Route::put('/updateRefund/{id}', [SectionController::class, 'updateRefund'])->name('updateRefund');
    Route::resource('sections', SectionController::class)->only(['index', 'create', 'show', 'edit', 'update', 'destroy']);
    Route::resource('settings', SettingController::class);
});

require __DIR__ . '/auth.php';
