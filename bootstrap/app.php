<?php  

use Illuminate\Foundation\Application;  
use App\Http\Middleware\EnsureUserHasRole; // Your custom middleware  

return Application::configure(basePath: dirname(__DIR__))  
    ->withRouting(  
        web: __DIR__.'/../routes/web.php',  
        commands: __DIR__.'/../routes/console.php',  
        health: '/up',  
    )  
    ->withMiddleware(function ($middleware) {  
        // Append middleware to the 'web' group  
        $middleware->web(append: [  
            \App\Http\Middleware\HandleInertiaRequests::class,  
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,  
        ]);  
        
        // Register the 'role' middleware  
        $middleware->alias([  
            'role' => \Spatie\Permission\Middleware\RoleMiddleware::class,  
            'permission' => \Spatie\Permission\Middleware\PermissionMiddleware::class,  
            'role_or_permission' => \Spatie\Permission\Middleware\RoleOrPermissionMiddleware::class,  
        ]);  
    })  
    ->withExceptions(function ($exceptions) {  
        // Handle exceptions here (optional)  
    })  
    ->create();