<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VerifiedPhone extends Model
{
    use HasFactory;
    const STATUS_UNVERIFIED = 0;
    const STATUS_OTP_SENT = 1;
    const STATUS_VERIFIED = 2;
    protected $fillable = [
        'phone',
        'status',
        'otp',
        'code'
    ];
}
