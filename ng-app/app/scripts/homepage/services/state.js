'use strict';

angular.module('benwalfordApp')
.factory('State', function(){
  return {
    dead: '*',
    live: 'o',
  }
});
