<?php

use Illuminate\Support\Facades\Broadcast;
Broadcast::channel('NewChat', function ($user) {
    return $user;
});
Broadcast::channel('NewMessage.{chat_id}', function ($user, $chat_id) {
    return $user;
});
