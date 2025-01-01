<?php

namespace App\Http\Middleware;

use App\Models\Chat;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $settings = Setting::first();
        $chat=Chat::where('user_id',null)->get()->count();
      //  dd( $settings);
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'chats_count' =>$chat
            ],
            'settings' => [
                'main_color' => optional(json_decode($settings->data))->main_color,
                'main_bg_image' => optional(json_decode($settings->data))->main_bg_image,
                'secondary_color' => optional(json_decode($settings->data))->secondary_color,
                'bg_color' => optional(json_decode($settings->data))->bg_color,
                'main_font_color' => optional(json_decode($settings->data))->main_font_color,
                'secondary_font_color' => optional(json_decode($settings->data))->secondary_font_color,
                'website_name' => optional(json_decode($settings->data))->website_name,
                'logo' => optional(json_decode($settings->data))->logo,
                'facebook' => optional(json_decode($settings->data))->facebook,
                'linkedin' => optional(json_decode($settings->data))->linkedin,
                'email' => optional(json_decode($settings->data))->email,
                'phone' => optional(json_decode($settings->data))->phone,
                'footer_text' => optional(json_decode($settings->data))->footer_text,
                'footer_description' => optional(json_decode($settings->data))->footer_description
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
