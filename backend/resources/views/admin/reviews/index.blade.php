@extends('layouts.admin')

@section('title', 'Client Reviews')

@section('content')
<div class="page-header">
    <h1>Client Reviews</h1>
</div>

<div class="card">
    <div class="card-body" style="padding:0;">
        @if($reviews->isEmpty())
            <div style="padding:3rem;text-align:center;color:var(--muted);">No reviews submitted yet.</div>
        @else
        <div class="table-wrap">
            <table>
                <thead>
                    <tr><th>Client</th><th>Company</th><th>Rating</th><th>Review</th><th>Status</th><th style="text-align:right;">Actions</th></tr>
                </thead>
                <tbody>
                    @foreach($reviews as $review)
                    <tr>
                        <td>
                            <strong>{{ $review->client_name }}</strong>
                            @if($review->client_role)<div style="font-size:.78rem;color:var(--muted);">{{ $review->client_role }}</div>@endif
                        </td>
                        <td>{{ $review->company ?? '—' }}</td>
                        <td>{{ str_repeat('★', $review->rating) }}</td>
                        <td style="max-width:280px;font-size:.83rem;">{{ \Str::limit($review->review_text, 80) }}</td>
                        <td>@if($review->is_approved)<span class="badge badge-green">Approved</span>@else<span class="badge badge-yellow">Pending</span>@endif</td>
                        <td style="text-align:right;white-space:nowrap;">
                            @if(!$review->is_approved)
                            <form method="POST" action="{{ route('admin.reviews.approve', $review) }}" style="display:inline;">
                                @csrf @method('PATCH')
                                <button class="btn btn-success btn-sm">Approve</button>
                            </form>
                            @else
                            <form method="POST" action="{{ route('admin.reviews.reject', $review) }}" style="display:inline;">
                                @csrf @method('PATCH')
                                <button class="btn btn-outline btn-sm">Hide</button>
                            </form>
                            @endif
                            <form method="POST" action="{{ route('admin.reviews.destroy', $review) }}" style="display:inline;" onsubmit="return confirm('Delete this review permanently?')">
                                @csrf @method('DELETE')
                                <button class="btn btn-danger btn-sm">Delete</button>
                            </form>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        @endif
    </div>
</div>
@endsection
