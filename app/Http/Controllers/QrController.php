<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use App\Models\QR;
use Illuminate\Support\Str;

class QrController extends Controller
{
    public function generate()
    {
        $uid = Str::uuid();
        $status = 'valid';

        QR::create([
            'uid' => $uid,
            'status' => $status,
        ]);

        $qrCode = QrCode::size(200)->generate($uid);

       

        return view('generate-qr', compact('qrCode', 'uid'));
    }

    public function scan()
    {
        return view('scan-qr');
    }

    public function check($uid)
    {
        $qr = QR::where('uid', $uid)->first();
        if ($qr && $qr->status === 'valid') {
            return response()->json(['status' => 'valid']);
        }
        return response()->json(['status' => 'not valid']);
    }
}
