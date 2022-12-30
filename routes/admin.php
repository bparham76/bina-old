<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::controller(ProductController::class)->group(function () {
    Route::get('test', 'test');

    Route::post('product/add', 'add_new_product');
    Route::get('product/{id}', 'get_product_by_id'); //->whereNumber('id');
});
