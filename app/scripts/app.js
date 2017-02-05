'use strict';
console.log("Login view");
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
    'ngRoute',
    'firebase'
    ])
  .constant('FirebaseURL',
    "https://c-reddit.firebaseio.com");

  let isAuth = (AuthFactory) => new Promise( (resolve, reject) => {
  if (AuthFactory.isAuthenticated()) {
    console.log("auth user");
    resolve();
  } else {
    console.log("not auth user");
    reject();
  }
});

   app.config(function($routeProvider,$locationProvider) {
      $locationProvider.hashPrefix('');
        $routeProvider
          .when('/', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            // controllerAs: 'login'
          })

        .when('/things', {
          templateUrl: 'views/things.html',
          controller: 'ThingsCtrl',
          // controllerAs: 'things'
        })

        .when('/newentry', {
          templateUrl: 'views/newentry.html',
          controller: 'NewentryCtrl',
          resolve: {isAuth}
        })

        .otherwise({
          redirectTo: '/'
        });
      });

      //Initialize Firebase
 var config = {
    apiKey: "AIzaSyD7lCy3hCZvX0DZWJtzMkmewb7DLaxkRGI",
    authDomain: "c-reddit.firebaseapp.com",
    databaseURL: "https://c-reddit.firebaseio.com",
    storageBucket: "c-reddit.appspot.com",
    messagingSenderId: "743438228080"
  };
  firebase.initializeApp(config);


// app.run(($location, FBCreds) => {
//   let creds = FBCreds;
//   let authConfig = {
//     apiKey: creds.key,
//     authDomain: creds.authDomain
//   };
//   firebase.initializeApp(authConfig);
// });
