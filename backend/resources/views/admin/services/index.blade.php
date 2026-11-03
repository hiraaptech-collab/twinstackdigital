@extends('layouts.admin')

@section('title', 'Services')

@section('content')
<div class="page-header">
    <h1>Services</h1>
    <a href="{{ route('admin.services.create') }}" class="btn btn-primary">+ Add Service</a>
</div>

<div class="card">
    <div class="card-body" style="padding:0;">
        @if($services->isEmpty())
            <div style="padding:3rem;text-align:center;color:var(--muted);">No services yet. <a href="{{ route('admin.services.create') }}">Add one →</a></div>
        @else
        <div class="table-wrap">
            <table>
                <thead>
                    <tr><th>Order</th><th>Title</th><th>Category</th><th>Featured</th><th>Status</th><th style="text-align:right;">Actions</th></tr>
                </thead>
                <tbody>
                    @foreach($services as $svc)
                    <tr>
                        <td>{{ $svc->sort_order }}</td>
                        <td><strong>{{ $svc->title }}</strong></td>
                        <td>{{ $svc->category ?? '—' }}</td>
                        <td>@if($svc->featured)<span class="badge badge-blue">Featured</span>@else—@endif</td>
                        <td>@if($svc->published)<span class="badge badge-green">Active</span>@else<span class="badge badge-yellow">Inactive</span>@endif</td>
                        <td style="text-align:right;">
                            <a href="{{ route('admin.services.edit', $svc) }}" class="btn btn-outline btn-sm">Edit</a>
                            <form method="POST" action="{{ route('admin.services.destroy', $svc) }}" style="display:inline;" onsubmit="return confirm('Delete this service?')">
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
