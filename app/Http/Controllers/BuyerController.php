<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class BuyerController extends Controller
{
    /**
     * Show the Buyer Dashboard.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Buyer/Dashboard');
    }
}
