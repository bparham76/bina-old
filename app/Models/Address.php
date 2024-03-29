<?php

namespace App\Models;

use App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'title',
        'owner',
        'text',
        'po_box',
        'phone',
        'latitude',
        'longitude',
        'province',
        'city',
        'county',
        'no'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
