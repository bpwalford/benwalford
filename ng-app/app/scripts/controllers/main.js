'use strict';

/**
 * @ngdoc function
 * @name benwalfordApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the benwalfordApp
 */
angular.module('benwalfordApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
