'use strict';

/**
 * @ngdoc overview
 * @name cRedditApp
 * @description
 * # cRedditApp
 *
 * Main module of the application.
 */
const app = angular
  .module('cRedditApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

app.config(function($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('');

      // Initialize Firebase
      firebase.initializeApp({

        apiKey: "AIzaSyD7lCy3hCZvX0DZWJtzMkmewb7DLaxkRGI",
        authDomain: "c-reddit.firebaseapp.com",
        databaseURL: "https://c-reddit.firebaseio.com",
        storageBucket: "c-reddit.appspot.com",
        messagingSenderId: "743438228080"
      });

      const checkForAuth = {
        checkForAuth($location) {
          const authReady = firebase.auth().onAuthStateChanged(user => {
            authReady();
            if (!user) {
              $location.url('/login')
            }
          });
        }
      };


      .config(function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
          })

        .when('/things', {
          templateUrl: 'views/things.html',
          controller: 'AboutCtrl',
          controllerAs: 'things'
        })

        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl',
          controllerAs: 'login'
        })

        .otherwise({
          redirectTo: '/'
        });
      });
