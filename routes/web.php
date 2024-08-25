<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\OtpController;
use App\Http\Controllers\PayPalController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TempFileController;
use App\Http\Controllers\UserController;
use App\Models\Article;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes([
    'register' => false
]);
Route::get('payout', [PayPalController::class, 'payout']);
Route::post('temp/store', [TempFileController::class, 'store'])->name('upload');
Route::middleware('auth')->group(function () {
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('/', [HomeController::class, 'index'])->name('index');
});
Route::get('lang/{locale}', function ($locale) {
    if (in_array($locale, ['en', 'ar'])) {
        session(['locale' => $locale]);
    }
    return redirect()->back();
});
Route::view('welcome', 'welcome');
Route::post('/upload', [StudentController::class, 'upload'])->name('upload.files');

Route::get('users', [UserController::class, 'index']);

Route::post('/form', function (Request $request) {
    return response($request);
});

Route::get('start-time', function () {
    $time = '2024-07-29 23:59:00';
    $start_time = Carbon::parse($time, 'Africa/Cairo');
    return response(['time' => $start_time]);
});

Route::view('/verify', 'phone_verification');

Route::get('otp', [OtpController::class, 'showOtpForm'])->name('otp.form');
Route::post('otp/send', [OtpController::class, 'sendOtp'])->name('otp.send');
Route::post('otp/verify', [OtpController::class, 'verifyOtp'])->name('otp.verify');
Route::get('otp/success', [OtpController::class, 'showSuccess'])->name('otp.success');

Route::get('verified/{code}/{phone}', function ($code, $phone) {
    return $code . ' ' . $phone;
})->name('verified');

Route::get('article',function(){
    $article=Article::create();
    return $article->id;
});
