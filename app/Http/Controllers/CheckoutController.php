<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CheckoutController extends Controller
{
    public function createPayment(Request $request)
    {
        $response = Http::withHeaders([
            'authorization' => env('PAYTABS_SERVER_KEY'),
            'content-type' => 'application/json',
        ])->post('https://secure-egypt.paytabs.com/payment/request', [
            "profile_id" => env('PAYTABS_PROFILE_ID'),
            "tran_type" => "sale",
            "tran_class" => "ecom",
            "cart_id" => '55', // Unique cart ID for this transaction
            "cart_description" => "Product Description", // Describe your cart items
            "cart_currency" => env('PAYTABS_CURRENCY', 'AED'),
            "cart_amount" => 100, // Payment amount
            "callback" => route('checkout.callback'), // Server-to-server callback URL
            "return" => route('checkout.create'), // Return URL for the user
        ]);

          $responseBody = $response->json();

        if (isset($responseBody['redirect_url'])) {
            return redirect($responseBody['redirect_url']); // Redirect to PayTabs payment page
        } else {
            return back()->withErrors(['error' => $responseBody['message'] ?? 'Unknown error']);
        }
    }
    public function return()
    {
        return 'return';
    }
    public function handleCallback(Request $request)
    {
        // Here you handle the callback from PayTabs after payment is processed
        $tranRef = $request->input('tranRef');
        $status = $request->input('respStatus');
        $message = $request->input('respMessage');

        // Optionally verify the signature here if needed
        // ...

        if ($status === 'A') {
            // Payment is authorized, handle successful payment
            return response()->json(['message' => 'Payment successful']);
        } else {
            // Payment failed, handle failure
            return response()->json(['message' => 'Payment failed: ' . $message], 400);
        }
    }
}
