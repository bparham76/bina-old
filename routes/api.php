<?php

use App\Http\Controllers\Authentication;
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

Route::post('test', function () {
    return response()->json(['fuck' => 'your head']);
});

Route::controller(Authentication::class)->group(function () {
    Route::get('sendcode', 'send_code');
    Route::get('verifycode', 'verify_code');
});


Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('check', function () {
        return response()->json(['status' => 'authenticated']);
    });

    Route::post('hello', function () {
        return response()->json(["screw" => "you"]);
    });
});
