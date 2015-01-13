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

        function buildCell(x,y,state) {
          var newCell = new Cell(state);

          if (scope.world[y][x].state === State.dead) {
            newCell.lastState = 'dead';
          } else {
            newCell.lastState = 'alive';
          }

          return newCell;
        }

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

          // read the board
          // create a new array of arrays of new states
          // iterate over those arrays of arrays and update the cell's state property

          var nextState = World.emptyStructure;

          for (var y = 0; y < scope.world.length; y++) {
            for (var x = 0; x < scope.world[y].length; x++) {
              var neighbors = countLivingNeighbors(x,y);
              var state = calculateNextCellState(x,y,neighbors);
              nextState[y][x] = buildCell(x,y,state);
            }
          }

          scope.world = nextState;
        }, 1000);
      }
    }
  }]);
