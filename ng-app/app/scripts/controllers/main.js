'use strict';

angular.module('benwalfordApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getPosts = function() {
      $http.get('https://benwalford.herokuapp.com/posts').
        success(function(data) {
          $scope.posts = data;
        }).
        error(function() {
          window.alert('Error');
        });
    };

  });
