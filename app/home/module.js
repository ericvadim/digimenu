"use strict";

angular.module('app.home', ['ui.router']).config(function ($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            views: {
                root: {
                    templateUrl: 'app/home/views/home.html',
                    controller: 'HomeCtrl'
                }
            }
        })
        .state('categories', {
            url: '/categories',
            views: {
                root: {
                    templateUrl: 'app/home/views/categories.html',
                    controller: 'CategoriesCtrl'
                }
            }
        })
        .state('restaurants', {
            url: '/restaurants',
            views: {
                root: {
                    templateUrl: 'app/home/views/restaurants.html',
                    controller: 'RestaurantsCtrl'
                }
            }
        })
});
