<?php

namespace App\Http\Controllers;

use App\Models\Price;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PriceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $prices= Price::all();
        $prices->each(callback: function ($price) {
            $price->features = json_decode($price->features, true);
        });
        return Inertia::render('Dashboard/Prices/index', [
            'prices' =>  $prices
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/Prices/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'price' => 'required|numeric|min:0',
            'link' => 'required|url',
            'features' => 'required|array|min:1',
            'features.*' => 'string|max:255',
        ]);
        Price::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'link' => $request->link,
            'features' => json_encode($request->features),
        ]);
        return redirect()->route('prices.index')->with('success', 'Price created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Price $price)
    {
        $price->features = json_decode($price->features, true);
        return Inertia::render('Dashboard/Prices/show', [
            'plan' => $price,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $price = Price::findOrFail($id);
        $price->features = json_decode($price->features, true);
        return Inertia::render('Dashboard/Prices/edit', [
            'plan' => $price,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
 
     public function update(Request $request,  $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:500',
            'price' => 'required|numeric|min:0',
  'link' => 'required|url',
            'features' => 'nullable|array',
            'features.*' => 'string',
        ]);

        $pricePlan = Price::findOrFail($id);

        // Update the existing price plan
        $pricePlan->update([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'link' => $request->link,
            'features' => json_encode($request->features), // Store features as a JSON string
        ]); 

        return redirect()->route('prices.index')->with('success', 'Price Plan updated successfully!');
    }
 

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Price $price)
    {
        $price->delete();
    }
}
