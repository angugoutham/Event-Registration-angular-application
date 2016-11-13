
var app = angular.module('eventsApp', []);
app.controller('EventController',
    function EventController($scope) {
  $scope.event="test";
});
