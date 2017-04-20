"use strict";

angular.module('app.home').controller('RestaurantsCtrl', function ($scope, $state) {
    $scope.restaurants = [

    ];
    for (var r = 1; r <= 15; r ++) {
        $scope.restaurants[$scope.restaurants.length] = {id: r, restaurant_name: "Restaurant" + r};
    }
    $scope.go = function (state) {
        $state.go(state);
    };
})
