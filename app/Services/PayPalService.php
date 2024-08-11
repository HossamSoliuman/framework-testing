<?php
namespace App\Services;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Support\Facades\Log;

class PayPalService
{
    protected $client;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => 'https://api.sandbox.paypal.com',
        ]);
    }

    public function getToken()
    {
        $response = $this->client->post('/v1/oauth2/token', [
            'auth' => [env('PAYPAL_CLIENT_ID'), env('PAYPAL_SECRET')],
            'form_params' => [
                'grant_type' => 'client_credentials',
            ],
        ]);

        $data = json_decode($response->getBody()->getContents(), true);
        return $data['access_token'];
    }

    public function sendPayout($amount, $email)
    {
        try {
            $token = $this->getToken();
            $response = $this->client->post('/v1/payments/payouts', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $token,
                    'Content-Type' => 'application/json',
                ],
                'json' => [
                    'sender_batch_header' => [
                        'email_subject' => 'SDK payouts test txn',
                    ],
                    'items' => [
                        [
                            'recipient_type' => 'EMAIL',
                            'amount' => [
                                'value' => $amount,
                                'currency' => 'USD',
                            ],
                            'receiver' => $email,
                            'note' => 'Thanks for your patronage!',
                            'sender_item_id' => uniqid(),
                        ],
                    ],
                ],
            ]);

            return json_decode($response->getBody()->getContents(), true);
        } catch (RequestException $e) {
            Log::error('PayPal API Error: ', ['error' => $e->getMessage()]);
            if ($e->hasResponse()) {
                $response = $e->getResponse();
                return json_decode($response->getBody()->getContents(), true);
            }
            return null;
        }
    }
}
