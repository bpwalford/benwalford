'use strict';

angular.module('benwalfordApp')
  .controller('HomeCtrl', [
    '$scope',
    '$interval',
    'World',
    // 'Cell',
    // 'State',
    // function($scope, $interval, World, Cell, State){
    function($scope, $interval, World){

      $scope.world = World.initialState;

    // function getCellState(x,y){
    //   if ($scope.cells[y] && $scope.cells[y][x]) {
    //     return $scope.cells[y][x].state;
    //   } else {
    //     return State.dead;
    //   }
    // }
    //
    //
    // function countLivingNeighbors(x,y){
    //   var livingNeighbors = 0;
    //   var neighbors = [
    //     [x-1,y-1], [x,y-1], [x+1,y-1],
    //     [x-1,y],  /*cell*/  [x+1,y],
    //     [x-1,y+1], [x,y+1], [x+1,y+1],
    //   ];
    //
    //   for (var i = 0; i < neighbors.length; i++) {
    //     var nX = neighbors[i][0];
    //     var nY = neighbors[i][1];
    //     var state = getCellState(nX, nY);
    //
    //     if (state === State.live) {
    //       livingNeighbors++;
    //     }
    //   }
    //
    //   return livingNeighbors;
    // }
    //
    //
    // function calculateNextCellState(x,y,neighbors){
    //   if ($scope.cells[y][x].state === State.live) {
    //     if (neighbors < 2 || neighbors > 3) {
    //       return $scope.cells[y][x].toggle();
    //     }
    //     return $scope.cells[y][x].state;
    //   } else {
    //     if (neighbors === 3) {
    //       return $scope.cells[y][x].toggle();
    //     } else {
    //       return $scope.cells[y][x].state;
    //     }
    //   }
    // }
    //
    // $interval(function(){
    //   var nextState = World.emptyStructure;
    //
    //   for (var y = 0; y < $scope.cells.length; y++) {
    //     for (var x = 0; x < $scope.cells[y].length; x++) {
    //       var neighbors = countLivingNeighbors(x,y);
    //
    //       var state = calculateNextCellState(x,y,neighbors);
    //
    //       nextState[y][x] = new Cell(state);
    //     }
    //   }
    //
    //   $scope.cells = nextState;
    // }, 50);
  }]);

  // .directive('theGame', function() {
  //   return {
  //     scope: {
  //       "currentWorld": "="
  //     },
  //     link: function(scope, elem) {
  //       function renderTheWorld() {
  //         // Do world rendering and operate on elem.
  //       };
  //
  //       scope.$watch("currentWorld", renderTheWorld)
  //     };
  //   }
  // });
  // .directive('tickWorld', function() {
  //   return {
  //     scope: {
  //       "initialWorld": "="
  //     },
  //     link: function(scope) {
  //       scope.currentWorld = scope.initialWorld;
  //
  //       tickPromise = $interval(function() {
  //         scope.world = scope.world.tick();
  //       }, 200);
  //
  //       $scope.on("$destroy", tickPromise.cancel);
  //     }
  //   }
  // })
  // <tick-world initial-world="initialWorld">
  //   <the-game world="currentWorld"></the-game>
  // </tick-world>
