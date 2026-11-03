<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProjectController extends ApiController
{
    /**
     * Display a listing of published projects.
     */
    public function index(Request $request)
    {
        $query = Project::where('published', true);

        // Filter by category
        $category = $request->query('category');
        if ($category) {
            $query->where('category', $category);
        }

        // Filter by featured
        $featured = $request->query('featured');
        if ($featured !== null) {
            $query->where('featured', $featured === 'true');
        }

        $projects = $query->latest('id')->get();

        return $this->success($projects);
    }

    /**
     * Display a single project.
     */
    public function show(Project $project)
    {
        if (!$project->published) {
            return $this->notFound();
        }

        return $this->success($project);
    }

    /**
     * Store a newly created project.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string|max:255',
            'technologies' => 'required|array',
            'project_url' => 'nullable|url',
            'screenshot_url' => 'nullable|url',
            'featured' => 'boolean',
            'published' => 'boolean',
        ]);

        if ($validator->fails()) {
            return $this->validationError($validator->errors());
        }

        $project = Project::create($validator->validated());

        return $this->created($project);
    }

    /**
     * Update a project.
     */
    public function update(Request $request, Project $project)
    {
        // Check permissions - only admin can update
        // In Phase 5, we assume authentication is handled at the route level

        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'category' => 'sometimes|required|string|max:255',
            'technologies' => 'sometimes|required|array',
            'project_url' => 'nullable|url',
            'screenshot_url' => 'nullable|url',
            'featured' => 'sometimes|boolean',
            'published' => 'sometimes|boolean',
        ]);

        if ($validator->fails()) {
            return $this->validationError($validator->errors());
        }

        $project->update($validator->validated());

        return $this->success($project);
    }

    /**
     * Remove a project.
     */
    public function destroy(Project $project)
    {
        $project->delete();

        return $this->noContent();
    }
}