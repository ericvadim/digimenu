/* global malarkey:false, moment:false */
(function () {
    'use strict';

    angular
        .module('app')
        .constant('malarkey', malarkey)
        .constant('moment', moment)
        .constant('ServerURL', 'https://digimenu.com/server/')
        // .constant('ServerURL', 'http://localhost/digimenu/server/')
    ;

})();
