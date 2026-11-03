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
        if (!Schema::hasTable('client_reviews')) {
            Schema::create('client_reviews', function (Blueprint $table) {
                $table->id();
                $table->string('client_name');
                $table->string('client_role')->nullable();
                $table->string('company')->nullable();
                $table->unsignedTinyInteger('rating')->default(5);
                $table->text('review_text');
                $table->boolean('is_approved')->default(false);
                $table->string('avatar_url')->nullable();
                $table->foreignId('project_id')->nullable()->constrained('projects')->nullOnDelete();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('consultation_slots')) {
            Schema::create('consultation_slots', function (Blueprint $table) {
                $table->id();
                $table->date('date');
                $table->string('time_slot');
                $table->boolean('is_available')->default(true);
                $table->string('booked_by_name')->nullable();
                $table->string('booked_by_email')->nullable();
                $table->string('booked_by_phone')->nullable();
                $table->text('notes')->nullable();
                $table->string('status')->default('available'); // available, booked, completed, cancelled
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('site_settings')) {
            Schema::create('site_settings', function (Blueprint $table) {
                $table->id();
                $table->string('key')->unique();
                $table->text('value')->nullable();
                $table->string('group')->default('general');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('site_settings');
        Schema::dropIfExists('consultation_slots');
        Schema::dropIfExists('client_reviews');
    }
};
