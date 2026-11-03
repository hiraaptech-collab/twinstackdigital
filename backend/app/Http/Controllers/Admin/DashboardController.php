<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Service;
use App\Models\ContactSubmission;
use App\Models\ClientReview;
use App\Models\ConsultationSlot;
use App\Models\SiteSetting;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'projects_total'       => Project::count(),
            'projects_published'   => Project::where('published', true)->count(),
            'services_total'       => Service::count(),
            'services_active'      => Service::where('published', true)->count(),
            'inquiries_total'      => ContactSubmission::count(),
            'inquiries_new'        => ContactSubmission::where('status', 'new')->count(),
            'reviews_pending'      => ClientReview::where('is_approved', false)->count(),
            'reviews_approved'     => ClientReview::where('is_approved', true)->count(),
            'consultations_total'  => ConsultationSlot::count(),
            'availability_status'  => SiteSetting::get('available_for_new_projects', 'available'),
            'availability_message' => SiteSetting::get('availability_message', 'Accepting select client partnerships'),
        ];

        $recent_inquiries = ContactSubmission::latest()->take(5)->get();

        return view('admin.dashboard', compact('stats', 'recent_inquiries'));
    }
}
