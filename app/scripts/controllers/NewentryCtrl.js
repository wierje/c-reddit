'use strict';
console.log("New entry");
/**
 * @ngdoc function
 * @name cRedditApp.controller:NewentryCtrl
 * @description
 * # NewentryCtrl
 * Controller of the cRedditApp
 */
angular.module('cRedditApp')
.controller("NewentryCtrl", function($scope, ItemStorage, $location) {
  $scope.title = "Post a new thing";
  // $scope.btnText="Add task";

  $scope.newThing = {
    uid: $scope.$parent.getUser()
    };

    $scope.addNewItem = function() {
      ItemStorage.addNewItem($scope.newThing)
      .then(function() {
        $location.url("/views/things");
      });
    };


});



  // .controller('NewentryCtrl', function ($routeProvider) {
  //   this.awesomeThings = [
  //     'HTML5 Boilerplate',
  //     'AngularJS',
  //     'Karma'
  //   ];
  // });
