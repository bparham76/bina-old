<?php

use App\Http\Controllers\Authentication;
use App\Http\Controllers\Misc;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use Morilog\Jalali;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('time', function () {
    return jdate() . ' * ' . jdate()->getTimestamp();
});

Route::controller(Authentication::class)->group(function () {
    Route::get('sendcode', 'send_code');
    Route::get('verifycode', 'verify_code');
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('check', function () {
        return response()->json(['auth' => true]);
    });

    Route::controller(Authentication::class)->group(function () {
        Route::post('logout', 'logout');
    });
});

Route::controller(Misc::class)->group(function () {
    Route::get(
        'provinces',
        'get_provinces'
    );
    Route::get('counties', 'get_counties');
    Route::get('cities', 'get_cities');
});
