@extends('layouts.admin')

@section('title', 'Edit Service')

@section('content')
<div class="page-header">
    <h1>Edit: {{ $service->title }}</h1>
    <a href="{{ route('admin.services.index') }}" class="btn btn-outline">← Back</a>
</div>

<div class="card">
    <div class="card-body">
        <form method="POST" action="{{ route('admin.services.update', $service) }}">
            @csrf @method('PUT')
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
                <div class="form-group">
                    <label class="form-label">Title *</label>
                    <input type="text" name="title" class="form-control" value="{{ old('title', $service->title) }}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Slug</label>
                    <input type="text" name="slug" class="form-control" value="{{ old('slug', $service->slug) }}">
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Category</label>
                <input type="text" name="category" class="form-control" value="{{ old('category', $service->category) }}">
            </div>
            <div class="form-group">
                <label class="form-label">Short Description *</label>
                <textarea name="description" class="form-control" rows="3" required>{{ old('description', $service->description) }}</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">Detailed Description</label>
                <textarea name="detailed_description" class="form-control" rows="5">{{ old('detailed_description', $service->detailed_description) }}</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">Sort Order</label>
                <input type="number" name="sort_order" class="form-control" value="{{ old('sort_order', $service->sort_order) }}" min="0">
            </div>
            <div class="form-group">
                <div class="form-check">
                    <input type="checkbox" name="featured" id="featured" value="1" {{ $service->featured ? 'checked' : '' }}>
                    <label for="featured" class="form-label" style="margin:0;">Featured service</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" name="published" id="published" value="1" {{ $service->published ? 'checked' : '' }}>
                    <label for="published" class="form-label" style="margin:0;">Active / Visible publicly</label>
                </div>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn btn-primary">Save Changes</button>
                <a href="{{ route('admin.services.index') }}" class="btn btn-outline">Cancel</a>
            </div>
        </form>
    </div>
</div>
@endsection
