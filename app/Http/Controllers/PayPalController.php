<?php

namespace App\Http\Controllers;

use App\Models\Withdrawal;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class PayPalController extends Controller
{
    public function payout()
    {
        $client = new Client([
            'base_uri' => 'https://api.sandbox.paypal.com',
        ]);

        $withdrawals = Withdrawal::all();
        $responses = [];

        foreach ($withdrawals as $withdrawal) {
            $amount = number_format($withdrawal->amount, 2, '.', '');
            $email = $withdrawal->paypal_email;

            $response = $this->sendPayout($client, $amount, $email);
            if ($response && isset($response['batch_header']) && $response['batch_header']['batch_status'] === 'PENDING') {
                $statusResponse = $this->getPayoutStatus($client, $response['links'][0]['href']);
                if ($statusResponse && isset($statusResponse['items'][0]['links'][0]['href'])) {
                    $itemResponse = $this->getPayoutItemStatus($client, $statusResponse['items'][0]['links'][0]['href']);
                    $responses[] = $itemResponse;
                } else {
                    $responses[] = $statusResponse;
                }
            } else {
                $responses[] = $response;
            }
        }

        return response()->json($responses);
    }

    protected function getToken($client)
    {
        $response = $client->post('/v1/oauth2/token', [
            'auth' => [env('PAYPAL_CLIENT_ID'), env('PAYPAL_SECRET')],
            'form_params' => [
                'grant_type' => 'client_credentials',
            ],
        ]);

        $data = json_decode($response->getBody()->getContents(), true);
        return $data['access_token'];
    }

    protected function sendPayout($client, $amount, $email)
    {
        try {
            $token = $this->getToken($client);
            $response = $client->post('/v1/payments/payouts', [
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
            if ($e->hasResponse()) {
                $response = $e->getResponse();
                return json_decode($response->getBody()->getContents(), true);
            }
            return null;
        }
    }

    protected function getPayoutStatus($client, $url)
    {
        try {
            $token = $this->getToken($client);
            $response = $client->get($url, [
                'headers' => [
                    'Authorization' => 'Bearer ' . $token,
                    'Content-Type' => 'application/json',
                ],
            ]);

            return json_decode($response->getBody()->getContents(), true);
        } catch (RequestException $e) {
            if ($e->hasResponse()) {
                $response = $e->getResponse();
                return json_decode($response->getBody()->getContents(), true);
            }
            return null;
        }
    }

    protected function getPayoutItemStatus($client, $url)
    {
        try {
            $token = $this->getToken($client);
            $response = $client->get($url, [
                'headers' => [
                    'Authorization' => 'Bearer ' . $token,
                    'Content-Type' => 'application/json',
                ],
            ]);

            return json_decode($response->getBody()->getContents(), true);
        } catch (RequestException $e) {
            if ($e->hasResponse()) {
                $response = $e->getResponse();
                return json_decode($response->getBody()->getContents(), true);
            }
            return null;
        }
    }
}
