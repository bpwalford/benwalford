'use strict';

angular.module('benwalfordApp')
  .factory('Beginning', ['Cell', function(Cell){

    var initialState = [
      [(new Cell('*')),(new Cell('*')),(new Cell('*')),],
      [(new Cell(' ')),(new Cell(' ')),(new Cell(' ')),],
      [(new Cell('*')),(new Cell('*')),(new Cell('*')),],
    ];

    return initialState;

  }]);
