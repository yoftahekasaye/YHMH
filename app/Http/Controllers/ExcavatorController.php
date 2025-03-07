<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ExcavatorController extends Controller
{
    // This function loads the Excavators page
    public function showExcavatorsPage()
    {
        return Inertia::render('ExcavatorListing/Excavators');
    }
}
