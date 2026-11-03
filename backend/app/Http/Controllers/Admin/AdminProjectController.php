<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminProjectController extends Controller
{
    public function index()
    {
        $projects = Project::latest()->get();
        return view('admin.projects.index', compact('projects'));
    }

    public function create()
    {
        return view('admin.projects.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
            'category'    => 'required|string|max:100',
            'technologies'=> 'nullable|string',
            'project_url' => 'nullable|url|max:500',
            'featured'    => 'boolean',
            'published'   => 'boolean',
            'screenshot'  => 'nullable|image|max:4096',
        ]);

        $data['featured']    = $request->boolean('featured');
        $data['published']   = $request->boolean('published');
        $data['technologies'] = $data['technologies']
            ? array_map('trim', explode(',', $data['technologies']))
            : [];

        if ($request->hasFile('screenshot')) {
            $path = $request->file('screenshot')->store('projects', 'public');
            $data['screenshot_url'] = '/storage/' . $path;
        }

        unset($data['screenshot']);
        Project::create($data);

        return redirect()->route('admin.projects.index')->with('success', 'Project created successfully.');
    }

    public function edit(Project $project)
    {
        return view('admin.projects.edit', compact('project'));
    }

    public function update(Request $request, Project $project)
    {
        $data = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
            'category'    => 'required|string|max:100',
            'technologies'=> 'nullable|string',
            'project_url' => 'nullable|url|max:500',
            'featured'    => 'boolean',
            'published'   => 'boolean',
            'screenshot'  => 'nullable|image|max:4096',
        ]);

        $data['featured']    = $request->boolean('featured');
        $data['published']   = $request->boolean('published');
        $data['technologies'] = $data['technologies']
            ? array_map('trim', explode(',', $data['technologies']))
            : [];

        if ($request->hasFile('screenshot')) {
            // Remove old image
            if ($project->screenshot_url) {
                $old = str_replace('/storage/', '', $project->screenshot_url);
                Storage::disk('public')->delete($old);
            }
            $path = $request->file('screenshot')->store('projects', 'public');
            $data['screenshot_url'] = '/storage/' . $path;
        }

        unset($data['screenshot']);
        $project->update($data);

        return redirect()->route('admin.projects.index')->with('success', 'Project updated successfully.');
    }

    public function show(Project $project)
    {
        return redirect()->route('admin.projects.edit', $project);
    }

    public function destroy(Project $project)
    {
        if ($project->screenshot_url) {
            $old = str_replace('/storage/', '', $project->screenshot_url);
            Storage::disk('public')->delete($old);
        }
        $project->delete();

        return redirect()->route('admin.projects.index')->with('success', 'Project deleted.');
    }
}
