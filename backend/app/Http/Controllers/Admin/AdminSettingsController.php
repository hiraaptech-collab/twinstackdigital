<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use App\Models\HomeContent;
use Illuminate\Http\Request;

class AdminSettingsController extends Controller
{
    public function index()
    {
        $settings = [
            'availability_status'  => SiteSetting::get('available_for_new_projects', 'available'),
            'availability_message' => SiteSetting::get('availability_message', 'Accepting select client partnerships & consultations'),
            'agency_email'         => SiteSetting::get('agency_email', 'twinstackdigital.pk@gmail.com'),
            'phone_primary'        => SiteSetting::get('phone_primary', '+92 310 3701543'),
            'phone_secondary'      => SiteSetting::get('phone_secondary', '+92 312 5215289'),
            'location'             => SiteSetting::get('location', 'Karachi, Pakistan'),
            'business_hours'       => SiteSetting::get('business_hours', 'Mon–Fri, 10am–7pm PKT'),
        ];

        $home = HomeContent::first();

        return view('admin.settings.index', compact('settings', 'home'));
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'availability_status'  => 'required|in:available,at_capacity,not_accepting',
            'availability_message' => 'required|string|max:255',
            'agency_email'         => 'required|email|max:255',
            'phone_primary'        => 'required|string|max:30',
            'phone_secondary'      => 'nullable|string|max:30',
            'location'             => 'required|string|max:255',
            'business_hours'       => 'nullable|string|max:100',
        ]);

        SiteSetting::set('available_for_new_projects', $data['availability_status'], 'availability');
        SiteSetting::set('availability_message', $data['availability_message'], 'availability');
        SiteSetting::set('agency_email', $data['agency_email'], 'contact');
        SiteSetting::set('phone_primary', $data['phone_primary'], 'contact');
        SiteSetting::set('phone_secondary', $data['phone_secondary'] ?? '', 'contact');
        SiteSetting::set('location', $data['location'], 'contact');
        SiteSetting::set('business_hours', $data['business_hours'] ?? '', 'contact');

        return back()->with('success', 'Settings saved successfully.');
    }

    public function updateContent(Request $request)
    {
        $data = $request->validate([
            'hero_title'    => 'nullable|string|max:255',
            'hero_subtitle' => 'nullable|string|max:500',
            'hero_cta_text' => 'nullable|string|max:100',
            'about_text'    => 'nullable|string',
        ]);

        $home = HomeContent::first();
        if ($home) {
            $home->update($data);
        } else {
            HomeContent::create($data);
        }

        return back()->with('success', 'Home content updated.');
    }
}
