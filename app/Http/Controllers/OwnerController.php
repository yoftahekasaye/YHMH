<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class OwnerController extends Controller
{
    /**
     * Show the Owner Dashboard.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Owner/Dashboard');
    }
}
