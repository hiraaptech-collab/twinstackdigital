@extends('layouts.admin')

@section('title', 'Inquiry from ' . $inquiry->name)

@section('content')
<div class="page-header">
    <h1>Inquiry from {{ $inquiry->name }}</h1>
    <a href="{{ route('admin.inquiries.index') }}" class="btn btn-outline">← Back</a>
</div>

<div style="display:grid;grid-template-columns:2fr 1fr;gap:1.5rem;align-items:start;">
    <div class="card">
        <div class="card-header"><h2>Message</h2></div>
        <div class="card-body">
            <p style="white-space:pre-wrap;font-size:.95rem;line-height:1.7;color:var(--navy);">{{ $inquiry->message }}</p>
        </div>
    </div>

    <div>
        <div class="card" style="margin-bottom:1rem;">
            <div class="card-header"><h2>Contact Details</h2></div>
            <div class="card-body" style="font-size:.88rem;line-height:2;">
                <div><strong>Name:</strong> {{ $inquiry->name }}</div>
                <div><strong>Email:</strong> <a href="mailto:{{ $inquiry->email }}" style="color:var(--blue);">{{ $inquiry->email }}</a></div>
                <div><strong>Phone:</strong> {{ $inquiry->phone ?? '—' }}</div>
                <div><strong>Service:</strong> {{ $inquiry->service ?? '—' }}</div>
                <div><strong>Submitted:</strong> {{ $inquiry->created_at->format('M j, Y, g:i a') }}</div>
            </div>
        </div>

        <div class="card">
            <div class="card-header"><h2>Update Status</h2></div>
            <div class="card-body">
                <form method="POST" action="{{ route('admin.inquiries.updateStatus', $inquiry->id) }}">
                    @csrf @method('PATCH')
                    <div class="form-group">
                        <select name="status" class="form-control">
                            @foreach(['new','read','replied','archived'] as $s)
                            <option value="{{ $s }}" {{ $inquiry->status === $s ? 'selected' : '' }}>{{ ucfirst($s) }}</option>
                            @endforeach
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width:100%;">Update</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
