<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function add_new_product(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'properties' => 'required|json',
            'vat' => 'required|boolean',
            'pictures' => 'required|json'
        ]);

        // $p = [
        //     'name' => $data['name'],
        //     'description' => $data['description'],
        //     'vat' => $data['vat'],
        //     'name' => $data['name'],
        //     'name' => $data['name'],
        // ];

        Product::create($data);
    }
}
