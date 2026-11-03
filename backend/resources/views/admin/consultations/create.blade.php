@extends('layouts.admin')

@section('title', 'Add Consultation Slot')

@section('content')
<div class="page-header">
    <h1>Add Consultation Slot</h1>
    <a href="{{ route('admin.consultations.index') }}" class="btn btn-outline">← Back</a>
</div>

<div class="card" style="max-width:500px;">
    <div class="card-body">
        <form method="POST" action="{{ route('admin.consultations.store') }}">
            @csrf
            <div class="form-group">
                <label class="form-label">Date *</label>
                <input type="date" name="date" class="form-control" value="{{ old('date') }}" min="{{ date('Y-m-d') }}" required>
            </div>
            <div class="form-group">
                <label class="form-label">Time Slot *</label>
                <input type="text" name="time_slot" class="form-control" value="{{ old('time_slot') }}" placeholder="e.g. 10:00 AM" required>
                <div class="form-hint">e.g. 10:00 AM, 2:00–3:00 PM</div>
            </div>
            <div class="form-group">
                <label class="form-label">Max Bookings</label>
                <input type="number" name="max_bookings" class="form-control" value="{{ old('max_bookings', 1) }}" min="1">
            </div>
            <div class="form-group">
                <div class="form-check">
                    <input type="checkbox" name="is_available" id="is_available" value="1" checked>
                    <label for="is_available" class="form-label" style="margin:0;">Available immediately</label>
                </div>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn btn-primary">Create Slot</button>
                <a href="{{ route('admin.consultations.index') }}" class="btn btn-outline">Cancel</a>
            </div>
        </form>
    </div>
</div>
@endsection
