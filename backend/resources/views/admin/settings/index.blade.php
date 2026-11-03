@extends('layouts.admin')

@section('title', 'Settings & Content')

@section('content')
<div class="page-header">
    <h1>Settings & Content</h1>
</div>

{{-- Availability & Contact Settings --}}
<div class="card" style="margin-bottom:1.5rem;">
    <div class="card-header"><h2>Agency Availability & Contact Info</h2></div>
    <div class="card-body">
        <form method="POST" action="{{ route('admin.settings.update') }}">
            @csrf @method('PUT')

            <div class="form-group">
                <label class="form-label">Agency Availability Status</label>
                <select name="availability_status" class="form-control">
                    <option value="available" {{ $settings['availability_status'] === 'available' ? 'selected' : '' }}>✅ Available for New Projects</option>
                    <option value="at_capacity" {{ $settings['availability_status'] === 'at_capacity' ? 'selected' : '' }}>🟡 Currently at Capacity</option>
                    <option value="not_accepting" {{ $settings['availability_status'] === 'not_accepting' ? 'selected' : '' }}>🔴 Not Accepting Projects</option>
                </select>
                <div class="form-hint">This controls the badge shown on the public website homepage.</div>
            </div>

            <div class="form-group">
                <label class="form-label">Availability Message</label>
                <input type="text" name="availability_message" class="form-control" value="{{ old('availability_message', $settings['availability_message']) }}" placeholder="Accepting select client partnerships & consultations">
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
                <div class="form-group">
                    <label class="form-label">Business Email *</label>
                    <input type="email" name="agency_email" class="form-control" value="{{ old('agency_email', $settings['agency_email']) }}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Location *</label>
                    <input type="text" name="location" class="form-control" value="{{ old('location', $settings['location']) }}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Primary Phone *</label>
                    <input type="text" name="phone_primary" class="form-control" value="{{ old('phone_primary', $settings['phone_primary']) }}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Secondary Phone</label>
                    <input type="text" name="phone_secondary" class="form-control" value="{{ old('phone_secondary', $settings['phone_secondary']) }}">
                </div>
                <div class="form-group">
                    <label class="form-label">Business Hours</label>
                    <input type="text" name="business_hours" class="form-control" value="{{ old('business_hours', $settings['business_hours']) }}" placeholder="Mon–Fri, 10am–7pm PKT">
                </div>
            </div>

            <div class="form-actions">
                <button type="submit" class="btn btn-primary">Save Settings</button>
            </div>
        </form>
    </div>
</div>

{{-- Home Content --}}
<div class="card">
    <div class="card-header"><h2>Homepage Content</h2></div>
    <div class="card-body">
        <form method="POST" action="{{ route('admin.settings.content.update') }}">
            @csrf @method('PUT')
            <div class="form-group">
                <label class="form-label">Hero Title</label>
                <input type="text" name="hero_title" class="form-control" value="{{ old('hero_title', $home?->hero_title ?? '') }}" placeholder="We Create Digital Experiences">
            </div>
            <div class="form-group">
                <label class="form-label">Hero Subtitle</label>
                <textarea name="hero_subtitle" class="form-control" rows="2">{{ old('hero_subtitle', $home?->hero_subtitle ?? '') }}</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">Hero CTA Button Text</label>
                <input type="text" name="hero_cta_text" class="form-control" value="{{ old('hero_cta_text', $home?->hero_cta_text ?? '') }}" placeholder="View Our Work">
            </div>
            <div class="form-group">
                <label class="form-label">About / Agency Description</label>
                <textarea name="about_text" class="form-control" rows="4">{{ old('about_text', $home?->about_text ?? '') }}</textarea>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn btn-primary">Save Content</button>
            </div>
        </form>
    </div>
</div>
@endsection
