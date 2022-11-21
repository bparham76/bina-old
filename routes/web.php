<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('home');
})->name('home');

Route::get('auth', function () {
    return view('auth');
})->name('auth');

Route::get('shop', function () {
    return view('shop');
})->name('shop');

Route::get('product', function () {
    return view('single-product');
})->name('product');


Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('hello', function () {
        return 'auth route';
    });
});
