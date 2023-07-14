<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\InertiaFormController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/inertia-test', function () {
    return Inertia::render('InertiaTest');
});

Route::get('/inertia/index', [InertiaFormController::class, 'index'])->name('inertia.index');
Route::get('/inertia/create', [InertiaFormController::class, 'create'])->name('inertia.create');
Route::get('/inertia/show/{id}', [InertiaFormController::class, 'show'])->name('inertia.show');
Route::post('/inertia', [InertiaFormController::class, 'store'])->name('inertia.store');
Route::delete('/inertia/{id}', [InertiaFormController::class, 'delete'])->name('inertia.delete');

Route::resource('items', ItemController::class)
    ->middleware(['auth', 'verified']);

Route::resource('customers', CustomerController::class)
    ->middleware(['auth', 'verified']);

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
