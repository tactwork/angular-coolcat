                      'use strict';

/* Services */

var coolServices = angular.module('coolServices', ['ngResource']);

coolServices.factory('Post', ['$resource',
  function($resource){
    return $resource('posts/:postId.json', {}, {
      query: {method:'GET', params:{postId:'posts'}, isArray:true}
    });
  }]);