<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Create Permissions only if they don't already exist
        $editPostsPermission = Permission::firstOrCreate(['name' => 'edit posts']);
        $deletePostsPermission = Permission::firstOrCreate(['name' => 'delete posts']);
    
        // Create Roles
        $defaultRole = Role::firstOrCreate(['name' => 'default']); // Optional, if you need it
        $adminRole = Role::firstOrCreate(['name' => 'Admin']);
        $ownerRole = Role::firstOrCreate(['name' => 'Owner']);
        $buyerRole = Role::firstOrCreate(['name' => 'Buyer']);
        $maintainerRole = Role::firstOrCreate(['name' => 'Maintainer']);
        $driverRole = Role::firstOrCreate(['name' => 'Driver']);
    
        // Assign Permissions to Roles
        $adminRole->givePermissionTo([$editPostsPermission, $deletePostsPermission]);
        $ownerRole->givePermissionTo([$editPostsPermission]);
    
        // Create Users with Assigned Roles and set different passwords
        $users = [
            ['fname' => 'Admin',  'lname' => 'user', 'email' => 'admin@gmail.com', 'role' => 'Admin', 'password' => 'admin123'],
            ['fname' => 'Owner', 'lname' => 'user','email' => 'owner@gmail.com', 'role' => 'Owner', 'password' => 'owner123'],
            ['fname' => 'Buyer', 'lname' => 'user', 'email' => 'buyer@gmail.com', 'role' => 'Buyer', 'password' => 'buyer123'],
            ['fname' => 'Maintainer', 'lname' => 'user','email' => 'maintainer@gmail.com', 'role' => 'Maintainer', 'password' => 'maintainer123'],
            ['fname' => 'Driver', 'lname' => 'user', 'email' => 'driver@gmail.com', 'role' => 'Driver', 'password' => 'driver123'],
        ];
    
        foreach ($users as $userData) {
            $user = User::firstOrCreate(
                ['email' => $userData['email']],  // Check for existing user by email
                [
                    'fname' => $userData['fname'],
                    'lname' => $userData['lname'],  // Ensure lname is included if it's required
                    'password' => Hash::make($userData['password']),
                ]
            );
    
            $user->assignRole($userData['role']);
        }
    }
    
}
