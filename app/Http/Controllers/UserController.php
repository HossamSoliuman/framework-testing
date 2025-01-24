<?php

namespace App\Http\Controllers;

use App\Services\FirebaseService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $firebaseService;

    public function __construct(FirebaseService $firebaseService)
    {
        $this->firebaseService = $firebaseService;
    }

    public function createUser(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
        ]);

        $this->firebaseService->addUser($validated);
        return response()->json(['status' => 'success', 'message' => 'User created successfully.']);
    }

    public function getUsers()
    {
        return response()->json($this->firebaseService->getUsers());
    }
}
