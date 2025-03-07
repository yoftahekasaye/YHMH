<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class FilteredBulldozersController extends Controller
{
    //
    public function showFilteredBulldozersPage()
    {
        return Inertia::render('BulldozerListing/filtersBulldozer');
    }
}
