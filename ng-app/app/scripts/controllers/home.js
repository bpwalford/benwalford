'use strict';

angular.module('benwalfordApp')
  .controller('HomeCtrl', function ($scope, $interval) {

    var Cell = function (state) {
      this.state = state;

      this.toggle = function() {
        if (this.state === ' ') {
          this.state = '*';
        } else {
          this.state = ' ';
        }
      };
    };

    $scope.cells = [
      [ (new Cell(' ')), (new Cell('*')), (new Cell(' ')),],
      [ (new Cell('*')), (new Cell(' ')), (new Cell('*')),],
      [ (new Cell(' ')), (new Cell('*')), (new Cell(' ')),],
    ];

    $interval(function(){
      for (var i = 0; i < $scope.cells.length; i++) {
        for (var j = 0; j < $scope.cells[i].length; j++) {
          $scope.cells[i][j].toggle();
        }
      }
    }, 1000);

  })
  .directive('changeState', function(){
    return {
      scope: false,
      templateUrl: '../../views/board.html'
    };
  });









  // end
