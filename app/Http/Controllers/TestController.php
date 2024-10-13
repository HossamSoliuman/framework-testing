<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class TestController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $data = 'https://example.com';
        $qrCode = QrCode::format('png')->size(200)->generate($data);
        $qrCodeBase64 = base64_encode($qrCode);

        return Post::create([
            'name' => $qrCodeBase64,
        ]);
        return view('qr_code', compact('qrCode'));
    }
}
