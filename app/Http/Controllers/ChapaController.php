<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class ChapaController extends Controller
{
    public function create()
    {
        return Inertia::render('Pay');
    }

    public function pay(Request $request)
    {
        $user = Auth::user(); // Get the logged-in user

       

        $tx_ref = "chapa-" . uniqid(); // Unique transaction reference

        $data = [
            'public_key' => env('CHAPA_PUBLIC_KEY'),
            'tx_ref' => $tx_ref,
            'amount' => $request->amount ?? 20000, 
            'currency' => 'ETB',
            'email' => $user->email, // Ensure this is a valid email
            'first_name' => $user->fname ?? 'Unknown',
            'last_name' => $user->lname ?? 'User',
            'title' => 'Pay '.$request->amount.' Birr',
            'description' => 'Paying with Confidence with Chapa',
            'logo' => 'https://chapa.link/asset/images/chapa_swirl.svg',
            'callback_url' => route('chapa.callback'),
            'return_url' => url('/'),
            'meta' => $request->meta ?? ['title' => 'Payment'] 
        ];

        // Debugging
        

        return Inertia::render('Pay', ['paymentData' => $data]);
    }

    public function callback(Request $request)
    {
        $tx_ref = $request->query('tx_ref');

        // Verify transaction with Chapa
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('CHAPA_SECRET_KEY'),
            'Accept' => 'application/json',
        ])->get("https://api.chapa.co/v1/transaction/verify/{$tx_ref}");

        $result = $response->json();

        if ($result['status'] === 'success') {
            return redirect('/')->with('success1', 'Payment Successful!');

        } else {
            return redirect('/')->with('error', 'Payment Failed!');
        }
    }
}