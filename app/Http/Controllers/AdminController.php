<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class AdminController extends Controller
{
    // Render the admin dashboard
    public function index()
    {
        return Inertia::render('Admin/Dashboard');
    }
    
    
}
