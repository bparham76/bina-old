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

Route::get('/time', function(){ return jdate() . ' * ' . jdate()->getTimestamp();});

Route::controller(Authentication::class)->group(function(){
    Route::get('sendcode', 'send_code');
    Route::get('verifycode', 'verify_code');
});