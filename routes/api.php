<?php

use App\Http\Controllers\AuthenticationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Log;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [AuthenticationController::class, 'login']);
//Route::post('register', [AuthenticationController::class, 'register']);
Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('auth')->group(function () {
        Route::get('user', function (Request $request) {
            return $request->user();
        });
        Route::post('logout', [AuthenticationController::class, 'logout']);
        Route::post('update', [AuthenticationController::class, 'update']);
    });
});


Route::get('twilio', function (Request $request) {
    // Retrieve the incoming SMS data from Twilio
    $from = $request->input('From');  // Sender's phone number
    $body = $request->input('Body');  // Content of the message

    // Log the details of the SMS
    Log::info("Message received from $from: $body");

    // Optionally return a response to Twilio
    return response('Message received', 200);
});

