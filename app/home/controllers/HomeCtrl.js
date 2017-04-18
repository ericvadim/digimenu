"use strict";

angular.module('app.home').controller('HomeCtrl', function ($scope, $state) {
    $scope.go = function (state) {
        $state.go(state);
    };
})
