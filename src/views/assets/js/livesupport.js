/**
 *  A basic jQuery plugin using the Module Pattern
 * *
 *  @author      Sam Deering
 *  @copyright   Copyright (c) 2012 jQuery4u
 *  @license     http://jquery4u.com/license/
 *  @since       Version 1.0
 *
 */

!function(exports, $, undefined)
{
    var Plugin = function()
    {

        /*-------- PLUGIN VARS ------------------------------------------------------------*/

        var priv = {}, // private API

            Plugin = {}, // public API

            // Plugin defaults
            defaults = {
                id : '',
                name : '',
                url : ''
            };

        /*-------- PRIVATE METHODS --------------------------------------------------------*/

        priv.options = {}; //private options

        priv.method1 = function()
        {
            console.log('Private method 1 called...');
            $('#videos').append(''+this.options.name+'');
            priv.method2(this.options);
        };

        priv.method2 = function()
        {
            console.log('Private method 2 called...');
            $('#'+priv.options.id).append(''+this.options.url+''); // append title
            $('#'+priv.options.id).append(''); //append video
        };

        /*-------- PUBLIC METHODS ----------------------------------------------------------*/

        Plugin.method1 = function()
        {
            console.log('Public method 1 called...');
            console.log(Plugin);

            //options called in public methods must access through the priv obj
            console.dir(priv.options);
        };

        Plugin.method2 = function()
        {
            console.log('Public method 2 called...');
            console.log(Plugin);
        };

        // Public initialization
        Plugin.init = function(options)
        {
            console.log('new plugin initialization...');
            $.extend(priv.options, defaults, options);
            priv.method1();
            return Plugin;
        }

        // Return the Public API (Plugin) we want
        // to expose
        console.log('new plugin object created...');
        return Plugin;
    }

    exports.Plugin = Plugin;

}(this, jQuery);


jQuery(document).ready( function()
{
    console.log('doc rdy');

    // EXAMPLE OF CREATING PLUGIN OBJECTS WITH CUSTOM SETTINGS

    console.log('--------------------------------------------');

    var myPlugin1 = new Plugin;
    myPlugin1.init(
    {
        /* custom options */
        id : 'vid01',
        name : 'Video 1',
        url : 'http://www.youtube.com/embed/dXo0LextZTU?rel=0'
    });

    //call to public methods
    myPlugin1.method1();
    myPlugin1.method2();

    console.log('--------------------------------------------');

    var myPlugin2 = new Plugin;
    myPlugin2.init(
    {
        /* custom options */
        id : 'vid02',
        name : 'Video 2',
        url : 'http://www.youtube.com/embed/nPMAUW-4lNY?rel=0'
    });

    //call to public methods
    myPlugin2.method1();
    myPlugin2.method2();

    // console.log('--------------------------------------------');

});