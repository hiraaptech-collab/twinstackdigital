@extends('layouts.admin')

@section('title', 'Edit Project')

@section('content')
<div class="page-header">
    <h1>Edit: {{ $project->title }}</h1>
    <a href="{{ route('admin.projects.index') }}" class="btn btn-outline">← Back</a>
</div>

<div class="card">
    <div class="card-body">
        <form method="POST" action="{{ route('admin.projects.update', $project) }}" enctype="multipart/form-data">
            @csrf @method('PUT')
            <div class="form-group">
                <label class="form-label">Title *</label>
                <input type="text" name="title" class="form-control" value="{{ old('title', $project->title) }}" required>
            </div>
            <div class="form-group">
                <label class="form-label">Category *</label>
                <input type="text" name="category" class="form-control" value="{{ old('category', $project->category) }}" required>
            </div>
            <div class="form-group">
                <label class="form-label">Description *</label>
                <textarea name="description" class="form-control" rows="4" required>{{ old('description', $project->description) }}</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">Technologies</label>
                <input type="text" name="technologies" class="form-control" value="{{ old('technologies', is_array($project->technologies) ? implode(', ', $project->technologies) : $project->technologies) }}" placeholder="Comma separated">
            </div>
            <div class="form-group">
                <label class="form-label">Live URL</label>
                <input type="url" name="project_url" class="form-control" value="{{ old('project_url', $project->project_url) }}">
            </div>
            <div class="form-group">
                <label class="form-label">Replace Screenshot</label>
                @if($project->screenshot_url)
                    <div style="margin-bottom:.5rem;"><img src="{{ $project->screenshot_url }}" alt="Current" style="height:80px;border-radius:6px;object-fit:cover;"></div>
                @endif
                <input type="file" name="screenshot" class="form-control" accept="image/*">
            </div>
            <div class="form-group">
                <div class="form-check">
                    <input type="checkbox" name="featured" id="featured" value="1" {{ $project->featured ? 'checked' : '' }}>
                    <label for="featured" class="form-label" style="margin:0;">Featured project</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" name="published" id="published" value="1" {{ $project->published ? 'checked' : '' }}>
                    <label for="published" class="form-label" style="margin:0;">Published</label>
                </div>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn btn-primary">Save Changes</button>
                <a href="{{ route('admin.projects.index') }}" class="btn btn-outline">Cancel</a>
            </div>
        </form>
    </div>
</div>
@endsection
