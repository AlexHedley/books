var myApp = angular.module('myApp',[]);
myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.rayWenderlich = [];
    $scope.hacking = [];
    $scope.theJoyOfCoding = [];
    $scope.dataScience = [];
    $scope.hackingReloaded = [];
    $scope.pythonPackt = [];

    $scope.init = function () {
        getData("rayWenderlich");
        getData("hacking");
        getData("theJoyOfCoding");
        getData("dataScience");
        getData("hackingReloaded");
        getData("pythonPackt");
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