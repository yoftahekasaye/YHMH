<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class BulldozerController extends Controller
{
    // Show Bulldozers Page
    public function showBulldozersPage()
    {
        return Inertia::render('BulldozerListing/Bulldozers');
    }
}
