'use strict';

angular.module('benwalfordApp')
  .controller('HomeCtrl', [
    '$scope',
    '$interval',
    'World',
    function($scope, $interval, World){
      $scope.world = World.initialState;
  }]);
