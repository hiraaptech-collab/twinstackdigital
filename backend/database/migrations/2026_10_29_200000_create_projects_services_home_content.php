<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->string('category')->default('Web Development');
            $table->json('technologies');
            $table->string('project_url')->nullable();
            $table->string('screenshot_url')->nullable();
            $table->boolean('featured')->default(false);
            $table->boolean('published')->default(true);
            $table->timestamps();
        });

        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->text('description');
            $table->text('detailed_description');
            $table->string('category')->default('website-development');
            $table->boolean('featured')->default(false);
            $table->boolean('published')->default(true);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('home_content', function (Blueprint $table) {
            $table->id();
            $table->string('hero_heading');
            $table->string('hero_subtitle');
            $table->string('cta_primary_label');
            $table->string('cta_secondary_label');
            $table->boolean('available_for_new_projects')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('home_content');
        Schema::dropIfExists('services');
        Schema::dropIfExists('projects');
    }
};