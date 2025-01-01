<?php

namespace App\Http\Controllers;

use App\Events\NewChatEvent;
use App\Events\NewMessageEvent;
use App\Events\NewMessageToPublicEvent;
use App\Models\Chat;
use App\Models\Guest;
use App\Models\Message;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Str;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $chats = Chat::with(['messages', 'user'])->get();
        $chats->map(function($chat) {
            $chat->messages_count = $chat->messages->count();
            $chat->last_message = $chat->messages->last();
            return $chat;
        });
        return Inertia::render('Dashboard/Chat/index', [
            'chats' => $chats,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Check for guest_id in cookies
        $guest_id = $request->cookie('guest_id');
    
        if (!$guest_id) {
            $guest_id = (string) Str::uuid(); // Generate a random guest_id
            // Store it in cookies for 30 days
            cookie()->queue(cookie('guest_id', $guest_id, 60 * 24 * 30));
        }
    
        $user_id = auth()->id();
    
        // Find the chat based on guest_id
        $chat = Chat::where('guest_id', $guest_id)->with(['messages.sender', 'user'])->first();
        $settings = Setting::first();

        // Check if settings exist and decode the JSON data manually
        $decodedSettings = $settings ? json_decode($settings->data, true) : null;

        // If chat doesn't exist, create a new one
        if (!$chat) {
            $chat = Chat::create([
                'id' => $guest_id,
                'user_id' => $user_id, // Associate with the authenticated user if logged in
                'guest_id' => $guest_id,
                'auto_message' => true, // Default to true for new chats
            ]);

            // Broadcast the new chat event
            broadcast(new NewChatEvent($chat))->toOthers();
        }
        if($chat){
            $chat->update(['auto_message' => true]);

        }
        // Handle auto message
        if ($chat->auto_message) {
            // Send the auto message
            $message = Message::create([
                'chat_id' => $chat->id,
                'sender_type' => User::class,
                'sender_id' => 1, // System/Bot user ID
                'message' => $decodedSettings['auto_message'], // Default auto message
            ]);
    
            // Broadcast the auto message event
            broadcast(new NewMessageEvent($message))->toOthers();
    
            // Set auto_message to false after sending the message
            $chat->update(['auto_message' => false]);
        }
    
        // Return the chat with related messages and user
        return response()->json($chat->load('messages.sender', 'user'));
    }
    
    
    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $chat = Chat::with(['messages.sender' , 'user'])->find($id);
        if ($chat) {
            $chat->user_id = auth()->id();
            $chat->save();
        }

        return Inertia::render('Dashboard/Chat/show', [
            'chat' => $chat,
            
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chat $chat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Chat $chat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chat $chat)
    {
        //
    }
    public function sendMessageGuest(Request $request)
    {
        
        // Validate the request data
        $validated = $request->validate([
            'message' => 'required|string|max:1000',
        ]);
    
        // Retrieve the guest_id from cookies
        $guestId = $request->cookie('guest_id');
    
        // If no guest_id exists, create one and store it in cookies
        if (!$guestId) {
            $guestId = 'guest_' . uniqid();
            cookie()->queue(cookie('guest_id', $guestId, 60 * 24 * 30)); // Store guest_id in cookies for 30 days
        }
    
        // Retrieve the existing chat for this guest
        $chat = Chat::where('guest_id', $guestId)->first();
    
        // If no chat exists for this guest, create a new one
        if (!$chat) {
            $chat = Chat::create(['guest_id' => $guestId]); // Create a new chat for the guest
            broadcast(new NewChatEvent($chat))->toOthers(); // Broadcast the new chat event
        }
    
        // Create the message
        $message = Message::create([
           
            'chat_id' => $chat->id, // Use the valid chat_id from the `chats` table
            'sender_type' => Guest::class, // Polymorphic type
            'sender_id' => null, // Unique guest identifier
            'message' => $validated['message'],
        ]);
    
        if ($message) {
            broadcast(new NewMessageEvent($message->load('sender')))->toOthers(); // Broadcast the new message event
        }
    
        return response()->json($message, 201); // Return the created message
    }
    public function sendMessage(Request $request)
    {
        // Validate the request data
        $validated = $request->validate([
            'message' => 'required|string|max:1000',
            'chat_id' => 'required|string',
        ]);
        $message = Message::create([
            'chat_id' => $request->chat_id,
            'sender_type' => User::class,
            'sender_id' => auth()->id(),
            'message' => $validated['message'],
        ]);
        
    
        if ($message) {
            broadcast(new NewMessageToPublicEvent($message->load('sender')))->toOthers();
        }
    
        return response()->json($message->load('sender'), 201); // Return the created message
    }
    
    
    
    
}
