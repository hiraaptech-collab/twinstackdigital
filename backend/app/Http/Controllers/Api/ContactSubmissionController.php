<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactSubmission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rules\Rule;
use App\Mail\ContactInquiryMail;

class ContactSubmissionController extends Controller
{
    public function store(Request $request)
    {
        // Support both 'fullName' (frontend form) and 'name'
        if (!$request->has('name') && $request->has('fullName')) {
            $request->merge(['name' => $request->input('fullName')]);
        }

        // Validate the incoming request
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:255'],
            'service' => ['required', 'string'],
            'budget' => ['nullable', 'string'],
            'message' => ['required', 'string', 'min:10'],
        ]);

        // Create the contact submission record
        $submission = ContactSubmission::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'] ?? null,
            'service' => $validated['service'],
            'budget' => $validated['budget'] ?? null,
            'message' => $validated['message'],
            'status' => 'new',
        ]);

        // Send email notification
        try {
            Mail::to('twinstackdigital.pk@gmail.com')
                ->send(new ContactInquiryMail($submission));
        } catch (\Exception $e) {
            // Log the error but don't fail the submission
            \Log::error('Contact inquiry email failed: ' . $e->getMessage());
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Your inquiry has been received and will be reviewed personally by our leadership team.',
            'submission_id' => $submission->id,
        ], 201);
    }

    public function index()
    {
        $submissions = ContactSubmission::latest()->paginate(20);
        return response()->json([
            'status' => 'success',
            'data' => $submissions,
        ]);
    }

    public function show($id)
    {
        $submission = ContactSubmission::findOrFail($id);
        return response()->json([
            'status' => 'success',
            'data' => $submission,
        ]);
    }

    public function updateStatus(Request $request, $id)
    {
        $submission = ContactSubmission::findOrFail($id);

        $validated = $request->validate([
            'status' => ['required', 'in:new,contacted,in_progress,won,lost'],
            'notes' => ['nullable', 'string'],
        ]);

        $submission->status = $validated['status'];
        $submission->notes = $validated['notes'] ?? null;
        $submission->save();

        return response()->json([
            'status' => 'success',
            'data' => $submission,
        ]);
    }
}