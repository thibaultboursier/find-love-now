angular
    .module('jowApp', [
    'ngRoute'
    ])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/home', {
                controller:'homeCtrl',
                templateUrl:'../views/home.html'
            })
            .otherwise({
                redirectTo: '/home'
            });

        // activate html5 mode (without hashbang)
        $locationProvider.html5Mode(true);
    }]);