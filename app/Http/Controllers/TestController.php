<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TestController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $users = User::all();
        foreach ($users->chunk(5) as $chunk) {
            foreach ($chunk as $user) {
                echo $user->name;
            }
            echo '<br>///////////////<br>';
        }
    }
}
