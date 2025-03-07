<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    // Render login page
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => route('password.request'),
            'status' => session('status'),
        ]);
    }

    // Handle login
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();
        $request->session()->regenerate();
        $user = $request->user();

        $role = $user->roles()->first()?->name;

        return match ($role) {
            'Admin' => redirect()->route('admin.dashboard'),
            'Owner' => redirect()->route('owner.dashboard'),
            'Buyer' => redirect()->route('buyer.dashboard'),
            'Maintainer' => redirect()->route('maintainer.dashboard'),
            'Driver' => redirect()->route('driver.dashboard'),
        };
    }

    // Handle logout
    public function destroy(Request $request): RedirectResponse
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
