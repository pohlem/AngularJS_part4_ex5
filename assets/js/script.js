var app = angular.module('showApp', []);

app.controller('showController', function($scope, $http) {
    $http.get("assets/json/voiture.json").then(function(response) {
        $scope.voiture = response.data;
    });
});