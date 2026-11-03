<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class AdminServiceController extends Controller
{
    public function index()
    {
        $services = Service::orderBy('sort_order')->get();
        return view('admin.services.index', compact('services'));
    }

    public function create()
    {
        return view('admin.services.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'               => 'required|string|max:255',
            'slug'                => 'nullable|string|max:255|unique:services,slug',
            'description'         => 'required|string',
            'detailed_description'=> 'nullable|string',
            'category'            => 'nullable|string|max:100',
            'sort_order'          => 'nullable|integer',
            'featured'            => 'boolean',
            'published'           => 'boolean',
        ]);

        $data['featured']   = $request->boolean('featured');
        $data['published']  = $request->boolean('published');
        $data['slug']       = $data['slug'] ?? \Str::slug($data['title']);
        $data['sort_order'] = $data['sort_order'] ?? 0;

        Service::create($data);

        return redirect()->route('admin.services.index')->with('success', 'Service created successfully.');
    }

    public function edit(Service $service)
    {
        return view('admin.services.edit', compact('service'));
    }

    public function update(Request $request, Service $service)
    {
        $data = $request->validate([
            'title'               => 'required|string|max:255',
            'slug'                => 'nullable|string|max:255|unique:services,slug,' . $service->id,
            'description'         => 'required|string',
            'detailed_description'=> 'nullable|string',
            'category'            => 'nullable|string|max:100',
            'sort_order'          => 'nullable|integer',
            'featured'            => 'boolean',
            'published'           => 'boolean',
        ]);

        $data['featured']   = $request->boolean('featured');
        $data['published']  = $request->boolean('published');
        $data['slug']       = $data['slug'] ?? \Str::slug($data['title']);
        $data['sort_order'] = $data['sort_order'] ?? 0;

        $service->update($data);

        return redirect()->route('admin.services.index')->with('success', 'Service updated successfully.');
    }

    public function show(Service $service)
    {
        return redirect()->route('admin.services.edit', $service);
    }

    public function destroy(Service $service)
    {
        $service->delete();
        return redirect()->route('admin.services.index')->with('success', 'Service deleted.');
    }
}
