'use strict';

angular.module('benwalfordApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getPosts = function() {
      $http.get('http://localhost:3000/posts').
        success(function(data) {
          $scope.posts = data;
        }).
        error(function() {
          alert('Error');
        });
    };

  });
