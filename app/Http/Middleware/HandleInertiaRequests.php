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
                'main_color' => json_decode($settings->data)->main_color,
                'main_bg_image' => json_decode($settings->data)->main_bg_image,
                'secondary_color' => json_decode($settings->data)->secondary_color,
                'bg_color' => json_decode($settings->data)->bg_color,
                'main_font_color' => json_decode($settings->data)->main_font_color,
                'secondary_font_color' => json_decode($settings->data)->secondary_font_color,
                'website_name' => json_decode($settings->data)->website_name,
                'logo' => json_decode($settings->data)->logo,
                'facebook' => json_decode($settings->data)->facebook,
                'linkedin' => json_decode($settings->data)->linkedin,
                'email' => json_decode($settings->data)->email,
                'phone' => json_decode($settings->data)->phone,
                'footer_text' => json_decode($settings->data)->footer_text,
                'footer_description' => json_decode($settings->data)->footer_description
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
