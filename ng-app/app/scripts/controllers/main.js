'use strict';

angular.module('benwalfordApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getPosts = function() {
      $http.get('localhost:3000/posts').
        success(function(data, status, headers, config) {
          $scope.posts = data;
        }).
        error(function(data, status, headers, config) {
          alert('Error');
        });
    }

  });
