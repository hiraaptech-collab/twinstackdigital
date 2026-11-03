<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactSubmission;
use Illuminate\Http\Request;

class AdminInquiryController extends Controller
{
    public function index()
    {
        $inquiries = ContactSubmission::latest()->get();
        return view('admin.inquiries.index', compact('inquiries'));
    }

    public function show($id)
    {
        $inquiry = ContactSubmission::findOrFail($id);
        // Mark as read
        if ($inquiry->status === 'new') {
            $inquiry->update(['status' => 'read']);
        }
        return view('admin.inquiries.show', compact('inquiry'));
    }

    public function updateStatus(Request $request, $id)
    {
        $inquiry = ContactSubmission::findOrFail($id);
        $request->validate(['status' => 'required|in:new,read,replied,archived']);
        $inquiry->update(['status' => $request->status]);
        return back()->with('success', 'Status updated.');
    }
}
