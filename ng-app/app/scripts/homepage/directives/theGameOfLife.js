'use strict';

angular.module('benwalfordApp')
.directive('theGameOfLife', [
  '$interval',
  'World',
  'State',
  'Cell', function($interval, World, State, Cell) {
    return {
      scope: {
        'world': '='
      },
      templateUrl: '../../../views/board.html',
      link: function(scope) {

        function getCellState(x,y){
          if (scope.world[y] && scope.world[y][x]) {
            return scope.world[y][x].state;
          } else {
            return State.dead;
          }
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

            if (state === State.live) {
              livingNeighbors++;
            }
          }

          return livingNeighbors;
        }

        function calculateNextCellState(x,y,neighbors){
          if (scope.world[y][x].state === State.live) {
            if (neighbors < 2 || neighbors > 3) {
              return scope.world[y][x].toggleState();
            }
            return scope.world[y][x].state;
          } else {
            if (neighbors === 3) {
              return scope.world[y][x].toggleState();
            } else {
              return scope.world[y][x].state;
            }
          }
        }

        $interval(function(){
          var nextState = [];

          for (var y = 0; y < scope.world.length; y++) {
            var row = [];
            for (var x = 0; x < scope.world[y].length; x++) {
              var neighbors = countLivingNeighbors(x,y);
              var state = calculateNextCellState(x,y,neighbors);
              row.push(state);
            }
            nextState.push(row);
          }

          for (var y = 0; y < nextState.length; y++) {
            for (var x = 0; x < nextState[y].length; x++) {
              var currentCell = scope.world[y][x];

              if (currentCell.state === State.dead) {
                currentCell.lastState = 'dead';
              } else {
                currentCell.lastState = 'alive';
              }

              currentCell.state = nextState[y][x];
            }
          }
        }, 750);
      }
    }
  }]);
