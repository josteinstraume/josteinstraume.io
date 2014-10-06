'use strict';

/**
 * @ngdoc overview
 * @name josteinstraumeioApp
 * @description
 * # josteinstraumeioApp
 *
 * Main module of the application.
 */
angular
  .module('josteinstraumeioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/myroute', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
