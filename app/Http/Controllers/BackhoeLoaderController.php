<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class BackhoeLoaderController extends Controller
{
    // This function loads the Backhoe Loaders page
    public function showBackhoeLoadersPage()
    {
        return Inertia::render('BackhoeLoadersListing/Backhoe_loaders');
    }
}
