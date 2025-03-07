<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class MaintainerController extends Controller
{
    /**
     * Show the Maintainer Dashboard.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Maintainer/Dashboard');
    }
}

