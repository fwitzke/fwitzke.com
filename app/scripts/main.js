'use strict';
var app = angular.module('witzke', []);

app.controller('ExperienceCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.experiences = [];

  var jsonUrl = $location.absUrl() + 'experiences.json';
  $http.get(jsonUrl).success(function(data){
    $scope.experiences = data;
  });
}]);

app.filter('period', function(){
  return function(period){
    return period.start + ' - ' + period.end;
  };
});
