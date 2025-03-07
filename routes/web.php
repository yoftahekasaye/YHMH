<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\BackhoeLoaderController;
use App\Http\Controllers\BulldozerController;
use App\Http\Controllers\DumpTruckController;
use App\Http\Controllers\ExcavatorController;
use App\Http\Controllers\FilteredBulldozersController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\OwnerController;
use App\Http\Controllers\BuyerController;
use App\Http\Controllers\MaintainerController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\ChapaController;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Dashboard routes
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Profile routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Routes for equipment pages
Route::get('/bulldozers', [BulldozerController::class, 'showBulldozersPage'])->name('bulldozers');
Route::get('/excavators', [ExcavatorController::class, 'showExcavatorsPage'])->name('excavators');
Route::get('/dump_trucks', [DumpTruckController::class, 'showDumpTrucksPage'])->name('dump_trucks');
Route::get('/backhoe_loaders', [BackhoeLoaderController::class, 'showBackhoeLoadersPage'])->name('backhoe_loaders');

// Chapa payment routes
Route::get('create_chapa', [ChapaController::class, 'create']);
Route::post('/chapa.pay', [ChapaController::class, 'pay'])->name('chapa.pay');
Route::get('/chapa.callback', [ChapaController::class, 'callback'])->name('chapa.callback');

// Admin routes with role-based middleware
Route::middleware(['auth', 'verified', 'role:Admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'index'])->name('dashboard'); // Add this line

});

// Dashboard routes for other roles
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/owner/dashboard', [OwnerController::class, 'index'])->middleware('role:Owner')->name('owner.dashboard');
    Route::get('/buyer/dashboard', [BuyerController::class, 'index'])->middleware('role:Buyer')->name('buyer.dashboard');
    Route::get('/maintainer/dashboard', [MaintainerController::class, 'index'])->middleware('role:Maintainer')->name('maintainer.dashboard');
    
});

Route::middleware(['auth', 'verified', 'role:Driver'])
    ->prefix('driver')
    ->name('driver.')
    ->group(function () {
        Route::get('/dashboard', [DriverController::class, 'index'])->name('dashboard');

        Route::get('/edit', [DriverController::class, 'edit'])->name('edit');
        Route::post('/update', [DriverController::class, 'update'])->name('update');
        Route::get('/driver/settings', [DriverController::class, 'settings'])->name('driver.settings');

    });

// Global logout route
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');

require __DIR__.'/auth.php';