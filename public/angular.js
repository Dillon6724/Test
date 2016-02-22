var app = angular.module("testApp", ["ngRoute"]);

app.controller('RouteController', ['$http', '$scope', '$route', '$routeParams', '$location',
function($http, $scope, $route, $routeParams, $location) {
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
}]);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $routeProvider.
    when('/', {
      templateUrl: 'templates/tests.html',
      controller: 'testsController',
      controllerAs: 'testsCtrl'
    }).
    when('/login', {
      templateUrl: 'templates/login.html',
      controller: 'loginController',
      controllerAs: 'loginCtrl'
    })
}]);


////////////////////////////////////////////////////////////////////////////////
//////////////////////        LOGIN CONTROLLER       ///////////////////////////
////////////////////////////////////////////////////////////////////////////////

app.controller("testsController", [ "$http", "$scope", function ($http, $scope) {
  this.working = "YES I AM"
}])

app.controller("loginController", [ "$http", "$scope", function ($http, $scope) {
  console.log("LOGIN CTRL HERE");
}])
