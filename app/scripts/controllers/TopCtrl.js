'use strict';

/**
 * @ngdoc function
 * @name cRedditApp.controller:TopctrlCtrl
 * @description
 * # TopctrlCtrl
 * Controller of the cRedditApp
 */
angular.module('cRedditApp')
  .controller('TopCtrl', function($scope, $location, $window, AuthFactory) {
    $scope.isLoggedIn = false;
    let currentUser = null;

    var auth = firebase.auth();
    auth.onAuthStateChanged(function(user) {
      if (user) {
        currentUser = user.uid;
        $scope.isLoggedIn = true;
        console.log('current user logged in', user.uid);
        $scope.$apply();
      } else {
        $scope.isLoggedIn = false;
        $window.location.href = '#/login';
      }
      $scope.$apply();
    });

    $scope.getUser = function() {
      return currentUser;
    };

  $scope.logout = function() {
    AuthFactory.logoutUser()
      .then(function(data) {
        console.log("logged out", data);
      });
  };
  });
