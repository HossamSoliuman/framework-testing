<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QR extends Model
{
    use HasFactory;
    public $table='qrs';

    protected $fillable = ['uid', 'status'];
}
