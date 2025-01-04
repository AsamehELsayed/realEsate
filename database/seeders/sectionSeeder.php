<?php

namespace Database\Seeders;
use App\Models\Section;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class sectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       Section::create([
        'name' => 'hero',
        'content' => json_encode([
            'title' => 'title',
            'header'=> 'header',
            'description' => 'description',
           
        ]),
      
       ]);
       Section::create([
        'name' => 'Affiliate_Program',
        'content' => json_encode([
            'title' => 'title',
            'header'=> 'header',
            'sub_header' => 'sub_header',
            'third_header' => 'third_header',
            'description' => 'description',
            'image' => 'images/hero_1.jpg',
        ]),
      
       ]);
       Section::create(attributes: [
        'name' => 'Plans',
        'content' => json_encode([
            'header'=> 'Plans',
            'description' => 'description',
        ]),
      
       ]);
       Section::create([
        'name' => 'Book_a_meeting',
        'content' => json_encode([
            'header'=> 'Lets Dive in and Start Your Journey',
            'description' => 'description',
        ]),
      
       ]);
     
      
   
     
     
       Section::create([
        'name' => 'privacy',
        'content' => json_encode([
            'title' => 'Privacy Policy',
            'header' => 'Your Privacy Matters',
            'description' => 'We take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.',
            'html_content' => '
                <h2>Introduction</h2>
                <p>We value your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information.</p>
                
                <h2>Information We Collect</h2>
                <p>We collect information that you provide directly to us, such as when you sign up for our services or fill out a contact form.</p>
                
                <h2>How We Use Your Information</h2>
                <p>Your information is used to provide services, communicate with you, and improve our offerings.</p>
                
                <h2>Data Security</h2>
                <p>We implement security measures to protect your data from unauthorized access or disclosure.</p>
                
                <h2>Cookies</h2>
                <p>We use cookies to enhance your experience on our website. You can control cookie settings in your browser.</p>
                
                <h2>Changes to This Policy</h2>
                <p>We may update this policy from time to time. We will notify you of any significant changes.</p>
                
                <h2>Contact Us</h2>
                <p>If you have any questions about this privacy policy, feel free to contact us.</p>
            ',
        ]),
    ]);
       Section::create([
        'name' => 'refund',
        'content' => json_encode([
            'title' => 'refund policy',
            'header' => 'Your Privacy Matters',
            'description' => 'We take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.',
            'html_content' => '
                <h2>Introduction</h2>
                <p>We value your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information.</p>
                
                <h2>Information We Collect</h2>
                <p>We collect information that you provide directly to us, such as when you sign up for our services or fill out a contact form.</p>
                
                <h2>How We Use Your Information</h2>
                <p>Your information is used to provide services, communicate with you, and improve our offerings.</p>
                
                <h2>Data Security</h2>
                <p>We implement security measures to protect your data from unauthorized access or disclosure.</p>
                
                <h2>Cookies</h2>
                <p>We use cookies to enhance your experience on our website. You can control cookie settings in your browser.</p>
                
                <h2>Changes to This Policy</h2>
                <p>We may update this policy from time to time. We will notify you of any significant changes.</p>
                
                <h2>Contact Us</h2>
                <p>If you have any questions about this privacy policy, feel free to contact us.</p>
            ',
        ]),
    ]);
       Section::create([
        'name' => 'terms',
        'content' => json_encode([
            'title' => 'terms policy',
            'header' => 'Your Privacy Matters',
            'description' => 'We take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.',
            'html_content' => '
                <h2>Introduction</h2>
                <p>We value your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information.</p>
                
                <h2>Information We Collect</h2>
                <p>We collect information that you provide directly to us, such as when you sign up for our services or fill out a contact form.</p>
                
                <h2>How We Use Your Information</h2>
                <p>Your information is used to provide services, communicate with you, and improve our offerings.</p>
                
                <h2>Data Security</h2>
                <p>We implement security measures to protect your data from unauthorized access or disclosure.</p>
                
                <h2>Cookies</h2>
                <p>We use cookies to enhance your experience on our website. You can control cookie settings in your browser.</p>
                
                <h2>Changes to This Policy</h2>
                <p>We may update this policy from time to time. We will notify you of any significant changes.</p>
                
                <h2>Contact Us</h2>
                <p>If you have any questions about this privacy policy, feel free to contact us.</p>
            ',
        ]),
    ]);

    
}}
