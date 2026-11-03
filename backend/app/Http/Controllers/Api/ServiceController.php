<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ServiceController extends ApiController
{
    /**
     * Display a listing of published services.
     */
    public function index(Request $request)
    {
        $query = Service::where('published', true);

        // Filter by category - only allow approved categories
        $category = $request->query('category');
        $allowedCategories = ['website-development', 'full-stack-web-applications', 'ecommerce-development'];
        if ($category) {
            if (in_array($category, $allowedCategories)) {
                $query->where('category', $category);
            }
        }

        $services = $query->latest('sort_order', 'id')->get();

        return $this->success($services);
    }

    /**
     * Display a single service.
     */
    public function show(Service $service)
    {
        if (!$service->published) {
            return $this->notFound();
        }

        return $this->success($service);
    }

    /**
     * Store a newly created service.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:services,slug',
            'description' => 'required|string',
            'detailed_description' => 'required|string',
            'category' => 'required|in:website-development,full-stack-web-applications,ecommerce-development',
            'featured' => 'boolean',
            'published' => 'boolean',
            'sort_order' => 'integer',
        ]);

        if ($validator->fails()) {
            return $this->validationError($validator->errors());
        }

        $service = Service::create($validator->validated());

        return $this->created($service);
    }

    /**
     * Update a service.
     */
    public function update(Request $request, Service $service)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|required|string|max:255',
            'slug' => 'sometimes|required|string|max:255|unique:services,slug,' . $service->id,
            'description' => 'sometimes|required|string',
            'detailed_description' => 'sometimes|required|string',
            'category' => 'sometimes|required|in:website-development,full-stack-web-applications,ecommerce-development',
            'featured' => 'sometimes|boolean',
            'published' => 'sometimes|boolean',
            'sort_order' => 'sometimes|integer',
        ]);

        if ($validator->fails()) {
            return $this->validationError($validator->errors());
        }

        $service->update($validator->validated());

        return $this->success($service);
    }

    /**
     * Remove a service.
     */
    public function destroy(Service $service)
    {
        $service->delete();

        return $this->noContent();
    }
}