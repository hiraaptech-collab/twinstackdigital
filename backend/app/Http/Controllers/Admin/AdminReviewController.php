<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ClientReview;
use Illuminate\Http\Request;

class AdminReviewController extends Controller
{
    public function index()
    {
        $reviews = ClientReview::latest()->get();
        return view('admin.reviews.index', compact('reviews'));
    }

    public function approve(ClientReview $review)
    {
        $review->update(['is_approved' => true]);
        return back()->with('success', 'Review approved.');
    }

    public function reject(ClientReview $review)
    {
        $review->update(['is_approved' => false]);
        return back()->with('success', 'Review hidden.');
    }

    public function destroy(ClientReview $review)
    {
        $review->delete();
        return back()->with('success', 'Review deleted.');
    }
}
