@extends('layouts.admin')

@section('title', 'Contact Inquiries')

@section('content')
<div class="page-header">
    <h1>Contact Inquiries</h1>
</div>

<div class="card">
    <div class="card-body" style="padding:0;">
        @if($inquiries->isEmpty())
            <div style="padding:3rem;text-align:center;color:var(--muted);">No inquiries received yet.</div>
        @else
        <div class="table-wrap">
            <table>
                <thead>
                    <tr><th>Name</th><th>Email</th><th>Phone</th><th>Service</th><th>Date</th><th>Status</th><th style="text-align:right;">Actions</th></tr>
                </thead>
                <tbody>
                    @foreach($inquiries as $inq)
                    @php $sc=['new'=>'badge-red','read'=>'badge-blue','replied'=>'badge-green','archived'=>'badge-gray']; @endphp
                    <tr>
                        <td><strong>{{ $inq->name }}</strong></td>
                        <td>{{ $inq->email }}</td>
                        <td>{{ $inq->phone ?? '—' }}</td>
                        <td>{{ $inq->service ?? '—' }}</td>
                        <td>{{ $inq->created_at->format('M j, Y') }}</td>
                        <td><span class="badge {{ $sc[$inq->status] ?? 'badge-gray' }}">{{ ucfirst($inq->status) }}</span></td>
                        <td style="text-align:right;">
                            <a href="{{ route('admin.inquiries.show', $inq->id) }}" class="btn btn-outline btn-sm">View</a>
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
