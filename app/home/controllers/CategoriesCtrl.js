"use strict";

angular.module('app.home').controller('CategoriesCtrl', function ($scope, $state) {
    $scope.categories = [
        {id: 1, category_name: "Ethnic"},
        {id: 2, category_name: "Fast Food"},
        {id: 3, category_name: "Casual Dining"},
        {id: 4, category_name: "Fast Casual"},
        {id: 5, category_name: "Family Dining"},
        {id: 6, category_name: "Fine Dining"}
    ];
    $scope.go = function (state) {
        $state.go(state);
    };
})
