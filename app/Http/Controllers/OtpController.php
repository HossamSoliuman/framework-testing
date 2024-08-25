<?php

namespace App\Http\Controllers;

use App\Models\VerifiedPhone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use App\Services\OtpService;

class OtpController extends Controller
{
    protected $otpService;

    public function __construct(OtpService $otpService)
    {
        $this->otpService = $otpService;
    }

    public function showOtpForm()
    {
        return view('otp.send');
    }

    public function sendOtp(Request $request)
    {
        $request->validate([
            'phone_number' => 'required',
        ]);
        $phoneNumber = $request->phone_number;
        $phone = VerifiedPhone::where('phone', $phoneNumber)->first();

        if ($phone && $phone->status == VerifiedPhone::STATUS_VERIFIED) {
            return redirect()->route('verified', ['code' => $phone->code, 'phone' => $phoneNumber]);
        }

        $otp = rand(100000, 999999);

        VerifiedPhone::updateOrCreate(
            ['phone' => $phoneNumber],
            [
                'otp' => $otp,
                'code' => 'TEST'
            ]
        );

        $this->otpService->sendOtp($phoneNumber, $otp);

        return view('otp.verify', ['phone_number' => $phoneNumber]);
    }



    public function verifyOtp(Request $request)
    {
        $request->validate([
            'otp' => 'required',
            'phone_number' => 'required'
        ]);

        $phoneNumber = $request->phone_number;
        $submittedOtp = $request->otp;
        $verifiedPhone = VerifiedPhone::where('phone', $phoneNumber)->first();
        if ($verifiedPhone->otp == $submittedOtp) {
            return redirect()->route('verified', ['code' => $verifiedPhone->code, 'phone' => $phoneNumber]);
        }

        return view('otp.verify', ['message' => 'otp is wronge', 'phone_number' => $phoneNumber]);
    }

    public function showSuccess()
    {
        return view('otp.success');
    }
}
