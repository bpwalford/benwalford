'use strict';

angular.module('benwalfordApp')
  .controller('HomeCtrl', [ '$scope', '$interval', 'Cell', function ($scope, $interval, Cell) {

    $scope.cells = Cell;

    function validCell(indices){
      if ($scope.cells[indices[0]][indices[1]] !== undefined) {
        return true;
      }
      return false;
    }

    function getNeighbors(x, y){
      var alive = 0;
      var neighbors = [
        [x-1,y-1], [x-1,y], [x-1,y+1],

        [x,y-1],  /*cell*/  [x,y+1],

        [x+1,y-1], [x+1,y], [x+1,y+1],
      ];

      for (var i = 0; i < neighbors.length-1; i++) {
        if (validCell(neighbors[i])) {
          if ($scope.cells[neighbors[i][0]][neighbors[i][1]] === '*') {
            alive++;
          }
        }
      }

      return alive;
    }

    function getState(neighbors, x, y){
      if ($scope.cells[x][y].state === '*') {
        if (neighbors < 2 || neighbors > 3) {
          $scope.cells[x][y].toggle();
        }
      } else {
        if (neighbors === 3) {
          $scope.cells[x][y].toggle();
        }
      }


    }

    for (var x = 0; x < $scope.cells.length-1; x++) {
      for (var y = 0; y < $scope.cells[x].length-1; y++) {
        var x1 = $scope.cells[x];
        var y1 = $scope.cells[y];

        var neighbors = getNeighbors(x,y);
        $scope.cells[x][y].state = getState(neighbors, x1, y1);
      }
    }


    // $interval(function(){
      // for (var i = 0; i < $scope.cells.length-1; i++) {
      //   for (var j = 0; j < $scope.cells[i].length-1; j++) {
      //
      //     var alive = 0;
      //     var neighbors = [
      //       [i-1,j-1], [i-1,j], [i-1,j+1],
      //
      //       [i,j-1],  /*cell*/  [i,j+1],
      //
      //       [i+1,j-1], [i+1,j], [i+1,j+1],
      //     ];
      //
      //     // get live neighbor count
      //     var x = neighbors[k][0];
      //     var y = neighbors[k][1];
      //     for (var k = 0; k < neighbors.length-1 ; k++) {
      //       if (x !== undefined && y !== undefined) {
      //         if ($scope.cells[x][y].state === '*') {
      //           alive++;
      //         }
      //       }
      //     }
      //     // determine life from neighbor count
      //     if (x !== undefined && y !== undefined) {
      //       if (alive < 2 || alive > 3 ) {
      //         if ($scope.cells[x][y].state === '*') {
      //           $scope.cells[x][y].toggle();
      //         }
      //       } else if (alive === 3) {
      //         if ($scope.cells[x][y].state === 'o') {
      //           $scope.cells[x][y].toggle();
      //         }
      //       }
      //     }
        //
        //   // for (var k = 0; i < neighbors.length-1; i++) {
        //   //   if ($scope.cells[neighbors[k][0]] !== undefined) {
        //   //     if ([neighbors[k][1]] !== undefined) {
        //   //       if ($scope.cells[neighbors[k][0]][neighbors[k][1]] === '*') {
        //   //         alive++;
        //   //       }
        //   //     }
        //   //   } else {
        //   //     continue;
        //   //   }
        //   // }
        //
        //   for (var k = 0; k < neighbors.length-1; k++) {
        //     try {
        //       var x = neighbors[k][0];
        //       var y = neighbors[k][1];
        //
        //       if ($scope.cells[x][y].state === '*') {
        //         alive++;
        //       }
        //     } catch(err) {
        //       continue;
        //     }
        //   }
        //
        //   try {
        //     if ($scope.cells[i][j].state === '*') {
        //       if (alive < 2 || alive > 3) {
        //         $scope.cells[i][j].toggle();
        //       }
        //     } else if ($scope.cells[i][j].state === 'o') {
        //       if (alive === 3) {
        //         $scope.cells[i][j].toggle();
        //       }
        //     }
        //   } catch(err) {
        //     continue;
        //   }
        // }
      // }
    // }, 3000);

  }])
  .directive('changeState', function(){
    return {
      scope: false,
      templateUrl: '../../views/board.html'
    };
  });
