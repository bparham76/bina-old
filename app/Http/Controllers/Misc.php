<?php

namespace App\Http\Controllers;

use App\Models\IranCity;
use App\Models\IranCounty;
use App\Models\IranProvince;
use Illuminate\Http\Request;

class Misc extends Controller
{
    public function get_provinces()
    {
        $provinces = IranProvince::all(['id', 'name']);
        return response()->json($provinces);
    }

    public function get_counties(Request $request)
    {
        $province = $request->validate(['province' => 'numeric'])['province'];
        $counties = IranCounty::where('province_id', $province)->get(['id', 'name']);
        // $counties = IranProvince::find($province)->counties;
        // $cities = IranProvince::find($province)->cities()->get(['id', 'name']);
        return response()->json($counties);
    }

    public function get_cities(Request $request)
    {
        $county = $request->validate(['county' => 'numeric'])['county'];
        $cities = IranCity::where('county_id', $county)->get(['id', 'name']);
        // $sectors = IranProvince::find($data['province'])->counties()->find($data['county']);
        return response()->json($cities);
    }
}
