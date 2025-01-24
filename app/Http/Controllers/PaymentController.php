<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use MyFatoorah\Library\PaymentMyfatoorahApiV2;

class PaymentController extends Controller
{
    public function checkout(Request $request)
    {
        $payment = new PaymentMyfatoorahApiV2(
            config('myfatoorah.api_key'),
            config('myfatoorah.base_url')
        );
        $data = [
            'InvoiceValue' => 100,
            'CustomerName' => 'any name',
            'CallBackUrl' => route('payment.callback'),
            'ErrorUrl' => route('payment.error'),
        ];

        $paymentData = $payment->sendPayment($data);
        return redirect($paymentData['Data']['PaymentURL']);
    }

    public function callback(Request $request)
    {
        // Handle payment success or failure
    }

    public function error()
    {
        // Handle payment error
    }
}
