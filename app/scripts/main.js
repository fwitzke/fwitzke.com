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

}]);

app.filter('metadata', function(){
  function getPeriod(item){
    var period = item.period;
    return period.start + ' - ' + period.end;
  }

  return function(item){
    if(item.period) {
      return getPeriod(item) + ' | ' + item.location;
    }
    return item.location;
  };
});
