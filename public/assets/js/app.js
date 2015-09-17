angular
    .module('flnApp', [
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
    }])
    .run(['$rootScope', function ($rootScope) {

        $rootScope.isViewLoading = false;

        $rootScope.$on('$routeChangeStart', function() {
            $rootScope.isViewLoading = true;
        });

        $rootScope.$on('$routeChangeSuccess', function() {
            $rootScope.isViewLoading = false;
        });

        $rootScope.$on('$routeChangeError', function() {
            $rootScope.isViewLoading = false;
        });
    }]);