<?php
namespace Rajtika\LiveSupport\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * Class ShoppingCartFacade
 * @package LaraShout\ShoppingCart
 */
class LiveSupportFacade extends Facade
{
    /**
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'livesupport';
    }
}
