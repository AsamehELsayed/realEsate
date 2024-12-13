<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $table = 'messages';
    protected $guarded = [];

    public function chat()
    {
        return $this->belongsTo(Chat::class);
    }
    public function sender()    
    {
        return $this->morphTo();
    }

    
}
