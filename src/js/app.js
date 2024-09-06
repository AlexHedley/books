var myApp = angular.module('myApp',[]);
myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.books = [];

    $scope.init = function () {
        getData();
    }

    getData = () =>  {
        var file = 'data/books.json';

        $http.get(file)
        .then(function(response) {
            $scope.books = response.data.books;
        });
    };

    $scope.init();
});