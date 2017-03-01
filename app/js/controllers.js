'use strict';

/* Controllers */

var coolControllers = angular.module('coolControllers', []);

coolControllers.controller('CoolListCtrl', ['$scope', 'Post',
  function($scope, Post) {
    $scope.posts = Post.query();
    $scope.orderProp = 'age';
  }]);

coolControllers.controller('CoolDetailCtrl', ['$scope', '$routeParams', 'Post',
  function($scope, $routeParams, Post) {
    $scope.post = Post.get({postId: $routeParams.postId}, function(post) {
      $scope.mainImageUrl = post.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
coolControllers.controller('CoolSideNavCtrl', function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
});