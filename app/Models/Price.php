<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
 protected $guarded = [];    
 public static function boot()
 {
     parent::boot();

     static::saving(function ($price) {
         $price->total = $price->price * $price->employees_count * $price->days_per_month * $price->hours_per_day;
     });
 }
}
