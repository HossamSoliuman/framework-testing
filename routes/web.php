<?php

use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ChunkFileUploadController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OtpController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PayPalController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\QrController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TempFileController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\UserController;
use App\Models\Article;
use BaconQrCode\Encoder\QrCode;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use SimpleSoftwareIO\QrCode\Facades\QrCode as FacadesQrCode;

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

Route::post('/upload/chunk', [UploadController::class, 'uploadChunk'])->name('upload.chunk');
Route::post('/upload/complete', [UploadController::class, 'completeUpload'])->name('upload.complete');
Route::get('/upload', [UploadController::class, 'showForm'])->name('upload.form');

Route::view('realtime-users', 'realtime-users');
Route::get('/checkout', [PaymentController::class, 'checkout'])->name('payment.checkout');
Route::get('/payment/callback', [PaymentController::class, 'callback'])->name('payment.callback');
Route::get('/payment/error', [PaymentController::class, 'error'])->name('payment.error');


Route::get('/generate-qr', [QrController::class, 'generate'])->name('generate-qr');
Route::get('/scan-qr', [QrController::class, 'scan'])->name('scan-qr');
Route::get('/check-qr/{uid}', [QrController::class, 'check'])->name('check-qr');

Route::get('url', function () {
    $qrCode = FacadesQrCode::size(200)->generate('https://temp-testing.smaster.live/generate-qr');
    return $qrCode;
});

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

Route::get('article', function () {
    $article = Article::create();
    return $article->id;
});

Route::get('test', TestController::class);

Route::resource('posts', PostController::class);

Route::get('/checkout', [CheckoutController::class, 'createPayment'])->name('checkout.create');
Route::get('/checkout/return', [CheckoutController::class, 'return'])->name('checkout.return');
Route::post('/checkout/callback', [CheckoutController::class, 'handleCallback'])->name('checkout.callback');
