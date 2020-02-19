<?php
namespace Rajtika\LiveSupport;

use Illuminate\Support\ServiceProvider;
use Rajtika\LiveSupport\Services\LiveSupport;

class LiveSupportServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('livesupport', function () {

            return new LiveSupport();
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->publishes([
            __DIR__.'/config/livesupport.php' =>  config_path('livesupport.php'),
        ], 'config');

        $this->loadRoutesFrom(__DIR__.'/routes.php');

        $this->loadMigrationsFrom(__DIR__.'/database/migrations');

        $this->publishes([
            __DIR__.'/database/migrations/' => database_path('migrations')
        ], 'migrations');

        $this->loadViewsFrom(__DIR__.'/views', 'livesupport');

        $this->publishes([
            __DIR__.'/views' => resource_path('views/vendor/livesupport'),
        ]);

        $this->publishes([
            __DIR__.'/views/assets' => public_path('vendor/livesupport'),
        ], 'public');
    }
}
