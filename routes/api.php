<?php

use App\Http\Controllers\Authentication;
use App\Http\Controllers\Misc;
use App\Http\Controllers\User;
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

// sleep(2);

Route::get('time', function () {
    return response()->json(['datetime' => jdate()->toString(), 'timestamp' => jdate()->getTimestamp()]);
});

Route::post('time-post', function () {
    return response()->json(['datetime' => jdate()->toString(), 'timestamp' => jdate()->getTimestamp()]);
});

Route::get('sth', function () {
    return response()->json(['item1' => 'some text']);
});

Route::post('sth-post', function () {
    return response()->json(['item1' => 'some text']);
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

    Route::controller(User::class)->group(function () {
        Route::post('user/add', 'add_user_info');
        Route::get('user/info', 'get_user_info');

        Route::post('address/add', 'add_user_address');
        Route::post('address/update', 'update_user_address');
        Route::get('address/get', 'get_user_addresses');
        Route::post('address/delete', 'delete_user_address');
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
