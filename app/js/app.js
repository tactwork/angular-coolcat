'use strict';

/* App Module */

var coolApp = angular.module('coolApp', [
  'ngRoute',
  'ngMaterial',
  'coolAnimations',

  'coolControllers',
  'coolFilters',
  'coolServices'
]);
coolApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('amber');
});
coolApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/posts', {
        templateUrl: 'partials/phone-list.html',
        controller: 'CoolListCtrl'
      }).
      when('/posts/:postId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'CoolDetailCtrl'
      }).
      otherwise({
        redirectTo: '/posts'
      });
  }]);
