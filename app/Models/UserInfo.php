<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class UserInfo extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'first_name',
        'last_name',
        'pid',
        'email',
        'eco_no',
        'reg_no',
        'shaba_no',
        'acc_no',
        'sex',
        'type',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
