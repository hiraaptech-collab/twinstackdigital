@extends('layouts.admin')

@section('title', 'Consultation Slots')

@section('content')
<div class="page-header">
    <h1>Consultation Slots</h1>
    <a href="{{ route('admin.consultations.create') }}" class="btn btn-primary">+ Add Slot</a>
</div>

<div class="card">
    <div class="card-body" style="padding:0;">
        @if($slots->isEmpty())
            <div style="padding:3rem;text-align:center;color:var(--muted);">No consultation slots created yet.</div>
        @else
        <div class="table-wrap">
            <table>
                <thead>
                    <tr><th>Date</th><th>Time Slot</th><th>Max Bookings</th><th>Available</th><th style="text-align:right;">Actions</th></tr>
                </thead>
                <tbody>
                    @foreach($slots as $slot)
                    <tr>
                        <td>{{ \Carbon\Carbon::parse($slot->date)->format('D, M j, Y') }}</td>
                        <td>{{ $slot->time_slot }}</td>
                        <td>{{ $slot->max_bookings }}</td>
                        <td>@if($slot->is_available)<span class="badge badge-green">Available</span>@else<span class="badge badge-red">Blocked</span>@endif</td>
                        <td style="text-align:right;">
                            <form method="POST" action="{{ route('admin.consultations.toggle', $slot) }}" style="display:inline;">
                                @csrf @method('PATCH')
                                <button class="btn btn-outline btn-sm">{{ $slot->is_available ? 'Block' : 'Enable' }}</button>
                            </form>
                            <form method="POST" action="{{ route('admin.consultations.destroy', $slot) }}" style="display:inline;" onsubmit="return confirm('Delete this slot?')">
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
