<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\HomeContent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class HomeContentController extends ApiController
{
    /**
     * Display the homepage content.
     */
    public function index()
    {
        $content = HomeContent::first();

        if (!$content) {
            return $this->success([
                'hero_heading'   => "We Don't Just Build Websites. We Create Digital Experiences.",
                'hero_subtitle'  => "Twin Stack Digital is a Karachi-based digital agency serving businesses worldwide.",
                'cta_primary_label'   => "Get a Free Quote",
                'cta_secondary_label' => "Explore Services",
                'available_for_new_projects' => true,
            ]);
        }

        return $this->success($content);
    }

    /**
     * Update homepage content.
     */
    public function update(Request $request)
    {
        $content = HomeContent::first() ?: new HomeContent();

        $validator = Validator::make($request->all(), [
            'hero_heading'               => 'sometimes|required|string|max:500',
            'hero_subtitle'              => 'sometimes|required|string|max:500',
            'cta_primary_label'          => 'sometimes|required|string|max:255',
            'cta_secondary_label'        => 'sometimes|required|string|max:255',
            'available_for_new_projects' => 'sometimes|boolean',
        ]);

        if ($validator->fails()) {
            return $this->validationError($validator->errors());
        }

        $content->fill($validator->validated());
        $content->save();

        return $this->success($content);
    }
}
