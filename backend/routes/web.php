<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\AdminProjectController;
use App\Http\Controllers\Admin\AdminServiceController;
use App\Http\Controllers\Admin\AdminReviewController;
use App\Http\Controllers\Admin\AdminInquiryController;
use App\Http\Controllers\Admin\AdminConsultationController;
use App\Http\Controllers\Admin\AdminSettingsController;

/*
|--------------------------------------------------------------------------
| Twin Stack Digital — Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return view('welcome');
});

/*
|--------------------------------------------------------------------------
| Admin Authentication Routes
|--------------------------------------------------------------------------
*/

// Admin login GET - no guest middleware; AuthController@login() handles both cases:
//   - Authenticated admin → redirect to admin.dashboard
//   - Unauthenticated visitor → render admin.auth.login
Route::get('/admin/login', [AuthController::class, 'login'])->name('admin.auth.login');
Route::post('/admin/login', [AuthController::class, 'authenticate'])->name('admin.auth.authenticate');

/*
|--------------------------------------------------------------------------
| Protected Admin Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth')->prefix('admin')->name('admin.')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout'])->name('auth.logout');

    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Projects CRUD
    Route::resource('projects', AdminProjectController::class)->names([
        'index'   => 'projects.index',
        'create'  => 'projects.create',
        'store'   => 'projects.store',
        'edit'    => 'projects.edit',
        'update'  => 'projects.update',
        'destroy' => 'projects.destroy',
    ]);

    // Services CRUD
    Route::resource('services', AdminServiceController::class)->names([
        'index'   => 'services.index',
        'create'  => 'services.create',
        'store'   => 'services.store',
        'edit'    => 'services.edit',
        'update'  => 'services.update',
        'destroy' => 'services.destroy',
    ]);

    // Reviews
    Route::get('/reviews',                          [AdminReviewController::class,  'index'])->name('reviews.index');
    Route::patch('/reviews/{review}/approve',       [AdminReviewController::class,  'approve'])->name('reviews.approve');
    Route::patch('/reviews/{review}/reject',        [AdminReviewController::class,  'reject'])->name('reviews.reject');
    Route::delete('/reviews/{review}',              [AdminReviewController::class,  'destroy'])->name('reviews.destroy');

    // Inquiries
    Route::get('/inquiries',                            [AdminInquiryController::class, 'index'])->name('inquiries.index');
    Route::get('/inquiries/{id}',                       [AdminInquiryController::class, 'show'])->name('inquiries.show');
    Route::patch('/inquiries/{id}/status',              [AdminInquiryController::class, 'updateStatus'])->name('inquiries.updateStatus');

    // Consultations
    Route::get('/consultations',                        [AdminConsultationController::class, 'index'])->name('consultations.index');
    Route::get('/consultations/create',                 [AdminConsultationController::class, 'create'])->name('consultations.create');
    Route::post('/consultations',                       [AdminConsultationController::class, 'store'])->name('consultations.store');
    Route::patch('/consultations/{consultation}/toggle',[AdminConsultationController::class, 'toggle'])->name('consultations.toggle');
    Route::delete('/consultations/{consultation}',      [AdminConsultationController::class, 'destroy'])->name('consultations.destroy');

    // Settings & Content
    Route::get('/settings',          [AdminSettingsController::class, 'index'])->name('settings.index');
    Route::put('/settings',          [AdminSettingsController::class, 'update'])->name('settings.update');
    Route::put('/settings/content',  [AdminSettingsController::class, 'updateContent'])->name('settings.content.update');
});

/*
|--------------------------------------------------------------------------
| Fallback
|--------------------------------------------------------------------------
*/

Route::get('/{catchall}', function () {
    abort(404);
})->where('catchall', '.*');
