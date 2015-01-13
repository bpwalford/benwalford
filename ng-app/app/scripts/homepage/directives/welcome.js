'use strict';

angular.module('benwalfordApp')
.directive('welcome', function() {
  return {
    restrict: 'E',
    templateUrl: '../../../views/welcome.html'
  }
});
