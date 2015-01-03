'use strict';

/**
 * @ngdoc function
 * @name benwalfordApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the benwalfordApp
 */
angular.module('benwalfordApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
