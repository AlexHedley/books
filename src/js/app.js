var myApp = angular.module('myApp',[]);
myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.rayWenderlich = [];
    $scope.humbleBundle = [];

    $scope.init = function () {
        getData("rayWenderlich");
        getData("humbleBundle");
    }

    getData = (category) =>  {
        var file = `data/${category}.json`;

        $http.get(file)
        .then(function(response) {
            $scope[category] = response.data.books;
        });
    };

    $scope.init();
});

myApp.filter("toDate", function () {
    return function (items) {
        return new Date(items);
    };
});