'use strict';
var app = angular.module('witzke', []);

app.controller('ExperienceCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.experiences = [];
  $http.get('experiences.json').success(function(data){
    $scope.experiences = data;
  });

  $scope.getClass = function(item) {
    if(item.avatar) {
      return 'avatar ' + item.avatar;
    } else {
      return 'image ' + item.image;
    }
  };

  $scope.getTechstackClass = function(item) {
    return 'badge ' + item.type + ' ' + item.name;
  };

}]);

app.filter('period', function(){
  return function(period){
    return period.start + ' - ' + period.end;
  };
});
