'use strict';
var app = angular.module('witzke', []);

app.controller('ExperienceCtrl', ['$scope', '$http', '$location', '$filter', function($scope, $http, $location, $filter) {
  $scope.experiences = [];

  var jsonUrl = $location.absUrl() + 'experiences.json';
  $http.get(jsonUrl).success(function(data){
    $scope.experiences = data;
  });

  $scope.getMeta = function(item) {
    return $filter('period')(item.period) + ' | ' + item.location;
  };

  $scope.getClass = function(item) {
    if(item.avatar) {
      return 'avatar ' + item.avatar;
    } else {
      return 'image ' + item.image;
    }
  };

}]);

app.filter('period', function(){
  return function(period){
    return period.start + ' - ' + period.end;
  };
});
