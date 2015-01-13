'use strict';

angular.module('benwalfordApp')
.controller('TestCtrl', ['$scope', 'World', function($scope, World) {
  $scope.world = World.initialState;
}]);
