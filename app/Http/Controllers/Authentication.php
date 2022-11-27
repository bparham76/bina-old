<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserInfo;
use App\Models\AuthTemp;
use Illuminate\Http\Request;
use Morilog\Jalalian;

class Authentication extends Controller
{
    public function send_code(Request $request)
    {
        $data = $request->validate([
            'phone' => 'required|digits:11',
        ]);

        sleep(2);

        $code = random_int(100000, 999999);
        $time = jdate()->getTimestamp();

        AuthTemp::updateOrCreate(
            ['phone' => $data['phone']],
            [
                'code' => $code,
                'time' => $time
            ]
        );

        return response()->json(['code' => $code]);
    }

    public function verify_code(Request $request)
    {
        $data = $request->validate([
            'phone' => 'required|digits:11',
            'code' => 'required|digits:6'
        ]);

        $temp_user = AuthTemp::where('phone', $data['phone'])->first();

        if (!isset($temp_user) || empty($temp_user)) {
            return response()->json(['message' => 'phone number not listed for authentication'], 404);
        }

        $time = jdate()->getTimestamp();

        if ($time - $temp_user->time > 120)
            return response()->json(['message' => 'code expired.'], 401);

        if ($data['code'] !== $temp_user->code)
            return response()->json(['message' => 'wrong authentication code.'], 401);

        $temp_user->delete();

        $user = User::where('phone', $data['phone'])->first();

        if (!isset($user) || empty($user)) {
            $user = User::create([
                'status' => 0,
                'user_info_id' => 0,
                'phone' => $data['phone']
            ]);

            $user_info = UserInfo::create(['user_id' => $user->id]);

            $user->user_info_id = $user_info->id;
            $user->save();

            $token = $user->createToken($data['phone'])->plainTextToken;

            return response()->json([
                'message' => 'new user created.',
                'action' => 1,
                'token' => $token
            ]);
        }

        $token = $user->createToken($data['phone'])->plainTextToken;

        return response()->json([
            'message' => 'redirect to user home page.',
            'action' => 2,
            'token' => $token
        ]);
    }
}
