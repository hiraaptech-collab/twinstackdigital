@extends('layouts.admin')

@section('title', 'Add Project')

@section('content')
<div class="page-header">
    <h1>Add Project</h1>
    <a href="{{ route('admin.projects.index') }}" class="btn btn-outline">← Back</a>
</div>

<div class="card">
    <div class="card-body">
        <form method="POST" action="{{ route('admin.projects.store') }}" enctype="multipart/form-data">
            @csrf
            <div class="form-group">
                <label class="form-label">Title *</label>
                <input type="text" name="title" class="form-control" value="{{ old('title') }}" required>
            </div>
            <div class="form-group">
                <label class="form-label">Category *</label>
                <input type="text" name="category" class="form-control" value="{{ old('category') }}" placeholder="e.g. Web Development, Branding" required>
            </div>
            <div class="form-group">
                <label class="form-label">Description *</label>
                <textarea name="description" class="form-control" rows="4" required>{{ old('description') }}</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">Technologies</label>
                <input type="text" name="technologies" class="form-control" value="{{ old('technologies') }}" placeholder="Comma separated: React, Laravel, MySQL">
                <div class="form-hint">Separate with commas</div>
            </div>
            <div class="form-group">
                <label class="form-label">Live URL</label>
                <input type="url" name="project_url" class="form-control" value="{{ old('project_url') }}" placeholder="https://example.com">
            </div>
            <div class="form-group">
                <label class="form-label">Screenshot Image</label>
                <input type="file" name="screenshot" class="form-control" accept="image/*">
                <div class="form-hint">Max 4MB. JPG, PNG, WebP.</div>
            </div>
            <div class="form-group">
                <div class="form-check">
                    <input type="checkbox" name="featured" id="featured" value="1" {{ old('featured') ? 'checked' : '' }}>
                    <label for="featured" class="form-label" style="margin:0;">Featured project</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" name="published" id="published" value="1" {{ old('published') ? 'checked' : '' }}>
                    <label for="published" class="form-label" style="margin:0;">Publish immediately</label>
                </div>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn btn-primary">Create Project</button>
                <a href="{{ route('admin.projects.index') }}" class="btn btn-outline">Cancel</a>
            </div>
        </form>
    </div>
</div>
@endsection
