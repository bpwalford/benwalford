'use strict';

angular.module('benwalfordApp')
  .controller('HomeCtrl', [ '$scope', '$interval', 'Cell', function ($scope, $interval, Cell) {

    $scope.cells = Cell;

    $interval(function(){
      for (var i = 0; i < $scope.cells.length; i++) {
        for (var j = 0; j < $scope.cells[i].length; j++) {

          var alive = 0;
          var neighbors = [
            [i-1,j-1], [i-1,j], [i-1,j+1],

            [i,j-1],  /*cell*/  [i,j+1],

            [i+1,j-1], [i+1,j], [i+1,j+1],
          ];

          for (var k = 0; k < neighbors.length-1; k++) {
            try {
              if ($scope.cells[neighbors[k][0]][neighbors[k][1]].state === '*') {
                alive++;
              }
            } catch(err) {
              continue;
            }
          }

          if ($scope.cells[i][j].state === '*') {
            if (alive < 2 || alive > 4) {
              $scope.cells[i][j].toggle();
            }
          } else {
            if (alive === 3) {
              $scope.cells[i][j].toggle();
            }
          }
        }
      }
    }, 500);

  }])
  .directive('changeState', function(){
    return {
      scope: false,
      templateUrl: '../../views/board.html'
    };
  });
