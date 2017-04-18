"use strict";


angular.module('app.admin', ['ui.router'])
    .config(function ($stateProvider) {

        $stateProvider
            .state('app.admin', {
                url: '/admin/dashboard',
                views: {
                    "content@app": {
                        templateUrl: 'app/admin/views/dashboard.html',
                        controller: 'DashboardController'
                    }
                }
            })
    });
