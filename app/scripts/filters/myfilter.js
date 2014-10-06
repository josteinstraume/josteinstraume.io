'use strict';

/**
 * @ngdoc filter
 * @name josteinstraumeioApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the josteinstraumeioApp.
 */
angular.module('josteinstraumeioApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
