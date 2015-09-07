angular
    .module('jowApp', [
    'ngRoute',
    'ngResource'
    ])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/home', {
                controller:'homeCtrl',
                templateUrl:'../views/home.html'
            })
            .when('/members', {
                controller:'membersCtrl',
                templateUrl:'../views/members.html'
            })
            .otherwise({
                redirectTo: '/home'
            });

        // activate html5 mode (without hashbang)
        $locationProvider.html5Mode(true);
    }]);