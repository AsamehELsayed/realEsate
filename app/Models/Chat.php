<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    protected $guarded = [];
    protected $casts = [
        "id" => "string",
        "created_at" => "datetime:Y-m-d H",
        "updated_at" => "datetime:Y-m-d H",
    ];
    public function messages()
    {
        return $this->hasMany(Message::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
