/**
 * Created by tboursier on 07/09/2015.
 */
angular.module('flnApp').controller('membersCtrl', ['$scope', 'members', function ($scope, members) {

    $scope.members = members;
}]);