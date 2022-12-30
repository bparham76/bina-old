<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Exception;

class ProductController extends Controller
{
    public function add_new_product(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'properties' => 'required|array',
            'vat' => 'required|boolean',
            'pictures' => 'required|array'
        ]);

        $p = [
            'name' => $data['name'],
            'description' => $data['description'],
            'vat' => $data['vat'],
            'properties' => json_encode($data['properties']),
            'pictures' => json_encode($data['pictures']),
        ];

        return response()->json(Product::create($p));
    }

    public function get_product_by_id(Request $request)
    {
        if (!is_numeric($request->id))
            return response('', 422);

        try {
            $product = Product::findOrFail($request->id);

            if (empty($product) || !isset($product))
                return response('', 404);

            $result = [
                ...$product->toArray(),
                'properties' => json_decode($product->properties),
                'pictures' => json_decode($product->pictures)
            ];
            return response()->json($result);
            // return response()->json($product->toArray());
        } catch (Exception $e) {
            return response('', 404);
        }
    }

    public function test()
    {
        return response('test ok');
    }
}
