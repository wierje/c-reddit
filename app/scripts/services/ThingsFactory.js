'use strict';

/**
 * @ngdoc service
 * @name cRedditApp.ThingsFactory
 * @description
 * # ThingsFactory
 * Factory in the cRedditApp.
 */
angular.module('cRedditApp')
  .factory('ThingsFactory', function ($q, $http) {
    // Service logic
    let getThings = function(){
      return $q((resolve, reject) => {
        $http.get("../../data/val.json")
        .success((thingsObject) => {
          resolve(thingsObject);
        })
        .error((error) => {
          reject(error);
        });
      });
    };
  });

  //   var meaningOfLife = 42;

  //   // Public API here
  //   return {
  //     someMethod: function () {
  //       return meaningOfLife;
  //     }
  //   };
  // });
