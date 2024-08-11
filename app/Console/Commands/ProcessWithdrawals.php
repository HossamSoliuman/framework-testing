<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Withdrawal;
use App\Services\PayPalService;
use Illuminate\Support\Facades\Log;

class ProcessWithdrawals extends Command
{
    protected $signature = 'withdrawals:process';
    protected $description = 'Process approved withdrawals';

    protected $paypalService;

    public function __construct(PayPalService $paypalService)
    {
        parent::__construct();
        $this->paypalService = $paypalService;
    }

    public function handle()
    {
        $withdrawals = Withdrawal::where('status', 'approved')->get();

        foreach ($withdrawals as $withdrawal) {
            $amount = number_format($withdrawal->amount, 2, '.', '');
            $email = $withdrawal->paypal_email;

            Log::info('Processing Withdrawal: ', [
                'id' => $withdrawal->id,
                'amount' => $amount,
                'email' => $email,
                'status' => $withdrawal->status
            ]);

            if ($this->paypalService->sendPayout($amount, $email)) {
                $withdrawal->update(['status' => 'sent']);
                $this->info('Withdrawal ID ' . $withdrawal->id . ' sent.');
            } else {
                $this->error('Withdrawal ID ' . $withdrawal->id . ' failed.');
            }
        }
    }
}
