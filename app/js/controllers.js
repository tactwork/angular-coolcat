'use strict';

/* Controllers */

var coolControllers = angular.module('coolControllers', ['ngSanitize']);

// coolControllers.controller('CoolListCtrl', ['$scope', 'Post',
//   function($scope, Post) {
//     $scope.posts = Post.query();
//     $scope.orderProp = 'age';
//   }]);

// coolControllers.controller('CoolDetailCtrl', ['$scope', '$routeParams', 'Post',
//   function($scope, $routeParams, Post) {
//     $scope.post = Post.get({postId: $routeParams.postId}, function(post) {
//       $scope.mainImageUrl = post.images[0];
//     });

//     $scope.setImage = function(imageUrl) {
//       $scope.mainImageUrl = imageUrl;
//     };
//   }]);
// coolControllers.controller('CoolSideNavCtrl', function($scope, $mdSidenav, $firebaseArray) {
//   var ref = firebase.database().ref().child("articles");
//   // create a synchronized array
//   // click on `index.html` above to see it used in the DOM!
//   $scope.articles = $firebaseArray(ref);
//   $scope.openLeftMenu = function() {
//     $mdSidenav('left').toggle();
//   };
// });
// coolControllers.controller('CoolAppCtrl', function($scope, $mdSidenav, $firebaseArray) {
//   var ref = firebase.database().ref().child("articles");
//   // create a synchronized array
//   // click on `index.html` above to see it used in the DOM!
//   $scope.articles = $firebaseArray(ref);
//   $scope.openLeftMenu = function() {
//     $mdSidenav('left').toggle();
//   };
// });
// coolControllers.controller('CoolChatCtrl', function($scope, $firebaseArray){
//     var ref = firebase.database().ref().child("about");
//   // create a synchronized array
//   // click on `index.html` above to see it used in the DOM!
//   $scope.about = $firebaseArray(ref);
// });
// coolControllers.controller("ChatCtrl", ["$scope", "chatMessages",
//   function($scope, chatMessages) {
//     $scope.user = "Guest " + Math.round(Math.random() * 100);

//     $scope.messages = chatMessages;

//     $scope.addMessage = function() {
//       // $add on a synchronized array is like Array.push() except it saves to the database!
//       $scope.messages.$add({
//         from: $scope.user,
//         content: $scope.message,
//         timestamp: firebase.database.ServerValue.TIMESTAMP
//       });

//       $scope.message = "";
//     };

//     // if the messages are empty, add something for fun!
//     $scope.messages.$loaded(function() {
//       if ($scope.messages.length === 0) {
//         $scope.messages.$add({
//           from: "Uri",
//           content: "Hello!",
//           timestamp: firebase.database.ServerValue.TIMESTAMP
//         });
//       }
//     });
//   }
// ]);
coolControllers.controller("PostCtrl", ["$scope", "articlePosts",
  function($scope, articlePosts) {
    $scope.user = "Guest " + Math.round(Math.random() * 100);

    $scope.posts = articlePosts;

    // if the messages are empty, add something for fun!
    $scope.posts.$loaded(function() {
      if ($scope.posts.length === 0) {
        $scope.posts.$add({
          header: "Uri",
          content: "Hello!",
          timestamp: firebase.database.ServerValue.TIMESTAMP
        });
      }
    });
  }
]);