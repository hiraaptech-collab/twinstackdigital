<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\HomeContentController;
use App\Http\Controllers\Api\ContactSubmissionController;

/*
 |--------------------------------------------------------------------------
 | Twin Stack Digital - API Routes (v1)
 |--------------------------------------------------------------------------
 |
 | Prefix: /api/v1
 | All endpoints here are part of the versioned REST API.
 |
 */

Route::get('/health', function () {
    $dbConnected = false;
    $dbError = null;

    try {
        // Safe database connection check using PDO ping
        DB::connection()->getPdo();
        $dbConnected = true;
    } catch (\Throwable $e) {
        Log::warning('Health check - database connection failed: ' . $e->getMessage());
        $dbConnected = false;
        $dbError = 'Database connection unavailable';
    }

    $defaultConnection = config('database.default', 'mysql');
    $dbConfig = config("database.connections.{$defaultConnection}", []);

    $isHealthy = $dbConnected;

    $response = [
        'status' => $isHealthy ? 'healthy' : 'degraded',
        'timestamp' => now()->toIso8601String(),
        'service' => config('app.name', 'Twin Stack Digital API'),
        'version' => 'v1',
        'environment' => config('app.env', 'production'),
        'database' => [
            'status' => $dbConnected ? 'connected' : 'disconnected',
            'driver' => $defaultConnection,
            'database' => $dbConfig['database'] ?? null,
        ],
    ];

    if (!$dbConnected && $dbError) {
        $response['database']['message'] = $dbError;
    }

    return response()->json($response, $isHealthy ? 200 : 503);
});

// Public API Endpoints (Frontend Accessible)
Route::prefix('projects')->group(function () {
    Route::get('/', [ProjectController::class, 'index']);
    Route::get('/{project}', [ProjectController::class, 'show']);
});

Route::prefix('services')->group(function () {
    Route::get('/', [ServiceController::class, 'index']);
    Route::get('/{service}', [ServiceController::class, 'show']);
});

Route::prefix('home-content')->group(function () {
    Route::get('/', [HomeContentController::class, 'index']);
});

Route::prefix('contact')->group(function () {
    Route::post('/', [ContactSubmissionController::class, 'store']);
});

Route::get('/reviews', function () {
    return response()->json([
        'status' => 'success',
        'data' => \App\Models\ClientReview::where('is_approved', true)->latest()->get(),
    ]);
});

Route::get('/consultations/available', function () {
    return response()->json([
        'status' => 'success',
        'data' => \App\Models\ConsultationSlot::where('is_available', true)
            ->where('date', '>=', now()->toDateString())
            ->orderBy('date')->orderBy('time_slot')->get(),
    ]);
});

Route::get('/settings', function () {
    return response()->json([
        'status' => 'success',
        'data' => [
            'agency_email' => \App\Models\SiteSetting::get('agency_email', 'twinstackdigital.pk@gmail.com'),
            'phone_primary' => \App\Models\SiteSetting::get('phone_primary', '+92 310 3701543'),
            'phone_secondary' => \App\Models\SiteSetting::get('phone_secondary', '+92 312 5215289'),
            'location' => \App\Models\SiteSetting::get('location', 'Karachi, Pakistan'),
            'available_for_new_projects' => (bool)\App\Models\SiteSetting::get('available_for_new_projects', true),
        ],
    ]);
});

// Protected Admin API Endpoints
Route::middleware('auth')->prefix('admin')->group(function () {
    Route::post('/projects', [ProjectController::class, 'store']);
    Route::put('/projects/{project}', [ProjectController::class, 'update']);
    Route::delete('/projects/{project}', [ProjectController::class, 'destroy']);

    Route::post('/services', [ServiceController::class, 'store']);
    Route::put('/services/{service}', [ServiceController::class, 'update']);
    Route::delete('/services/{service}', [ServiceController::class, 'destroy']);

    Route::put('/home-content', [HomeContentController::class, 'update']);

    Route::get('/inquiries', [ContactSubmissionController::class, 'index']);
    Route::get('/inquiries/{id}', [ContactSubmissionController::class, 'show']);
    Route::put('/inquiries/{id}/status', [ContactSubmissionController::class, 'updateStatus']);
});