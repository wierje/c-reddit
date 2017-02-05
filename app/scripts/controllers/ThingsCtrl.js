'use strict';
console.log("Things");
/**
 * @ngdoc function
 * @name cRedditApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cRedditApp
 */
angular.module('cRedditApp')
  .controller('ThingsCtrl', function ($location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
