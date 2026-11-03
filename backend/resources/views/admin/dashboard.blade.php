@extends('layouts.admin')

@section('title', 'Dashboard')

@section('content')
<div class="stats-grid">
    <div class="stat-card">
        <div class="label">Projects</div>
        <div class="value">{{ $stats['projects_total'] }}</div>
        <div class="sub">{{ $stats['projects_published'] }} published</div>
    </div>
    <div class="stat-card">
        <div class="label">Services</div>
        <div class="value">{{ $stats['services_total'] }}</div>
        <div class="sub">{{ $stats['services_active'] }} active</div>
    </div>
    <div class="stat-card">
        <div class="label">Inquiries</div>
        <div class="value">{{ $stats['inquiries_total'] }}</div>
        <div class="sub" style="color:{{ $stats['inquiries_new'] > 0 ? '#dc2626' : 'inherit' }}">{{ $stats['inquiries_new'] }} new</div>
    </div>
    <div class="stat-card">
        <div class="label">Reviews</div>
        <div class="value">{{ $stats['reviews_approved'] }}</div>
        <div class="sub" style="color:{{ $stats['reviews_pending'] > 0 ? '#d97706' : 'inherit' }}">{{ $stats['reviews_pending'] }} pending approval</div>
    </div>
</div>

<div class="card">
    <div class="card-header">
        <h2>Recent Inquiries</h2>
        <a href="{{ route('admin.inquiries.index') }}" class="btn btn-outline btn-sm">View All</a>
    </div>
    <div class="card-body" style="padding:0;">
        @if($recent_inquiries->isEmpty())
            <div style="padding:2rem;text-align:center;color:var(--muted);">No inquiries yet.</div>
        @else
        <div class="table-wrap">
            <table>
                <thead>
                    <tr><th>Name</th><th>Email</th><th>Service</th><th>Date</th><th>Status</th></tr>
                </thead>
                <tbody>
                    @foreach($recent_inquiries as $inq)
                    <tr>
                        <td><strong>{{ $inq->name }}</strong></td>
                        <td>{{ $inq->email }}</td>
                        <td>{{ $inq->service ?? '—' }}</td>
                        <td>{{ $inq->created_at->format('M j, Y') }}</td>
                        <td>
                            @php $sc=['new'=>'badge-red','read'=>'badge-blue','replied'=>'badge-green','archived'=>'badge-gray']; @endphp
                            <span class="badge {{ $sc[$inq->status] ?? 'badge-gray' }}">{{ ucfirst($inq->status) }}</span>
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
