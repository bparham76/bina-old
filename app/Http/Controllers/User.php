<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserInfo;
use App\Models\Address;
use App\Models\User as UserModel;

class User extends Controller
{
    public function add_user_info(Request $request)
    {
        $data = $request->validate([
            'first_name' => 'nullable|string',
            'last_name' => 'nullable|string',
            'pid' => 'nullable|digits:10|unique:user_infos,pid',
            'email' => 'nullable|email|unique:user_infos,emal',
            'eco_no' => 'nullable|numeric',
            'reg_no' => 'nullable|numeric',
            'shaba_no' => 'nullable|string',
            'acc_no' => 'nullable|numeric',
            'sex' => 'nullable|digit:1',
            'type' => 'nullable|digit:1',
        ]);

        $user_info = UserInfo::whereBelongsTo($request->user());

        // $user_info->update($data);
        $user_info->update([
            'first_name' => !empty($data['first_name']) ? $data['first_name'] : '',
            'last_name' => !empty($data['last_name']) ? $data['last_name'] : '',
            'pid' => !empty($data['pid']) ? $data['pid'] : '',
            'email' => !empty($data['email']) ? $data['email'] : '',
            'eco_no' => !empty($data['eco_no']) ? $data['eco_no'] : '',
            'reg_no' => !empty($data['reg_no']) ? $data['reg_no'] : '',
            'shaba_no' => !empty($data['shaba_no']) ? $data['shaba_no'] : '',
            'acc_no' => !empty($data['acc_no']) ? $data['acc_no'] : '',
            'sex' => !empty($data['sex']) ? $data['sex'] : 0,
            'type' => !empty($data['type']) ? $data['type'] : 0,
        ]);

        // return $user_info->get();
    }

    public function get_user_info(Request $request)
    {
        return response()->json(array_merge(UserInfo::whereBelongsTo($request->user())->get()[0]->toArray(), ['phone' => $request->user()->phone]));
    }

    public function add_user_address(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string',
            'owner' => 'required|string',
            'text' => 'required|string',
            'po_box' => 'required|digits:10',
            'phone' => 'required|digits:11',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'province' => 'required|numeric',
            'county' => 'required|numeric',
            'city' => 'required|numeric',
        ]);

        Address::create([...$data, 'user_id' => $request->user()->id]);
    }

    public function get_user_addresses(Request $request)
    {
        return Address::whereBelongsTo($request->user())->get();
    }

    public function delete_user_address(Request $request)
    {
        $id = $request->validate(['id' => 'numeric']);
        return Address::find($id)->first()->delete();
        // return $item;
    }
}
