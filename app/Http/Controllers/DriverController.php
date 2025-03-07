<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User; // Ensure this import is present

class DriverController extends Controller
{
    /**
     * Show the Driver Dashboard.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Driver/Dashboard', [
            'user' => Auth::user(),
        ]);
    }

    /**
     * Show the edit profile page.
     *
     * @return \Inertia\Response
     */
    public function edit()
    {
        return Inertia::render('Driver/UpdateProfile', [
            'user' => Auth::user(),
        ]);
    }

    /**
     * Update the driver's profile.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request)
    {
        // Validate the request data
        $validator = Validator::make($request->all(), [
            'fname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . Auth::id(),
        ]);

        // If validation fails, redirect back with errors
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        // Fetch the authenticated user
        $user = Auth::user();

        // Check if user is authenticated and exists
        if (!$user instanceof User) {  // Ensure $user is an instance of User model
            return redirect()->back()->with('error', 'User not found.');
        }

        // Update the user's profile with the validated data
        $user->update([  // The update method should be available on an Eloquent model
            'fname' => $request->input('fname'),
            'lname' => $request->input('lname'),
            'email' => $request->input('email'),
        ]);

        // Redirect to the driver dashboard with success message
        
        return redirect()->route('driver.dashboard')->with('success', 'Your profile has been successfully updated!');
    }
}
