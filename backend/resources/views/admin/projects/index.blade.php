@extends('layouts.admin')

@section('title', 'Projects')

@section('content')
<div class="page-header">
    <h1>Projects</h1>
    <a href="{{ route('admin.projects.create') }}" class="btn btn-primary">+ Add Project</a>
</div>

<div class="card">
    <div class="card-body" style="padding:0;">
        @if($projects->isEmpty())
            <div style="padding:3rem;text-align:center;color:var(--muted);">No projects yet. <a href="{{ route('admin.projects.create') }}">Add one →</a></div>
        @else
        <div class="table-wrap">
            <table>
                <thead>
                    <tr><th>Title</th><th>Category</th><th>Featured</th><th>Published</th><th>Created</th><th style="text-align:right;">Actions</th></tr>
                </thead>
                <tbody>
                    @foreach($projects as $project)
                    <tr>
                        <td><strong>{{ $project->title }}</strong></td>
                        <td>{{ $project->category }}</td>
                        <td>@if($project->featured)<span class="badge badge-blue">Featured</span>@else<span class="badge badge-gray">No</span>@endif</td>
                        <td>@if($project->published)<span class="badge badge-green">Live</span>@else<span class="badge badge-yellow">Draft</span>@endif</td>
                        <td>{{ $project->created_at->format('M j, Y') }}</td>
                        <td style="text-align:right;">
                            <a href="{{ route('admin.projects.edit', $project) }}" class="btn btn-outline btn-sm">Edit</a>
                            <form method="POST" action="{{ route('admin.projects.destroy', $project) }}" style="display:inline;" onsubmit="return confirm('Delete this project?')">
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
