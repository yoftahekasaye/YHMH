<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class DumpTruckController extends Controller
{
    // This function loads the Dump Trucks page
    public function showDumpTrucksPage()
    {
        return Inertia::render('DumpTrucksListing/Dump_trucks');
    }
}

