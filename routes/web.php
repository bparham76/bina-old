<?php

use Illuminate\Support\Facades\Route;
use illuminate\Http\Request;

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


Route::get('{all}', function () {
    return view('home');
})->where('all', '.*')->name('home');

// Route::get('auth', function () {
//     return view('auth');
// })->name('login');

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->name('dashboard');

// Route::middleware(['auth:sanctum'])->group(function () {
//     Route::get('fuck', function (Request $request) {
//         $request->user()->tokens()->delete();
//     });
// });
