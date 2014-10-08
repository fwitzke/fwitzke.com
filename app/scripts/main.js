'use strict';
var app = angular.module('witzke', []);

app.controller('ExperienceCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.experiences = [];
  $http.get('experiences.json').success(function(data){
    $scope.experiences = data;
  });

}]);
