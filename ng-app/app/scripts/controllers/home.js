'use strict';

angular.module('benwalfordApp')
  .controller('HomeCtrl', [ '$scope', '$interval', 'World', function($scope, $interval, World){

    $scope.cells = World.initialState;

    function getCellState(x,y){
      var state;
      // console.log('y: ' + y + ' | x: ' + x );
      try {
        state = $scope.cells[y][x].state;
      } catch(err) {
        state = undefined;
      }

      return state;
    }


    function countLivingNeighbors(x,y){
      var livingNeighbors = 0;
      var neighbors = [
        [x-1,y-1], [x,y-1], [x+1,y-1],
        [x-1,y],  /*cell*/  [x+1,y],
        [x-1,y+1], [x,y+1], [x+1,y+1],
      ];

      for (var i = 0; i < neighbors.length; i++) {
        var nX = neighbors[i][0];
        var nY = neighbors[i][1];
        var state = getCellState(nX, nY);

        if (state === World.alive) {
          livingNeighbors++;
        }
      }
      // console.log(livingNeighbors);
      // console.log('*********************');
      return livingNeighbors;
    }


    function calculateNextCellState(x,y,neighbors){
      if ($scope.cells[y][x].state === World.alive) {
        if (neighbors < 2 || neighbors > 3) {
          return $scope.cells[y][x].toggle();
        }
        return $scope.cells[y][x].state;
      } else {
        if (neighbors === 3) {
          return $scope.cells[y][x].toggle();
        }
      }
    }

    $interval(function(){
      var nextState = World.emptyStructure;

      for (var y = 0; y < $scope.cells.length; y++) {
        for (var x = 0; x < $scope.cells[y].length; x++) {
          var neighbors = countLivingNeighbors(x,y);
          console.log('x: ' + x + ' | y: ' + y + ' | state: ' + $scope.cells[y][x].state + ' | neighbors: ' + neighbors);

          var state = calculateNextCellState(x,y,neighbors) || World.dead;

          nextState[y][x] = new World.buildCell(state);
        }
      }

      $scope.cells = nextState;
      console.log('*********************');
    }, 1);

  }])
  .directive('changeState', function(){
    return {
      scope: false,
      templateUrl: '../../views/board.html'
    };
  });
