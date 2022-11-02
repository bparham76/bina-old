<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class Authentication extends Controller
{
    public function register_new_user(Request $request)
    {
        $data = $request->validate([
            'phone' => 'nullable|digits:11',
            'mail' => 'required_without:phone|email',
        ]);

        return response()->json(['message' => 'added new user']);
    }
}
