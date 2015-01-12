'use strict';

angular.module('benwalfordApp')
.factory('Cell', ['State', function(State){
  return function (state) {
    this.state = state;

    this.toggle = function() {
      if (this.state === State.dead) {
        return State.live;
      } else {
        return State.dead;
      }
    };
  };
}]);
