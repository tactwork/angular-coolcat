                      'use strict';

/* Services */

var coolServices = angular.module('coolServices', ['ngResource', 'firebase']);

// coolServices.factory('Post', ['$resource',
//   function($resource){
//     return $resource('posts/:postId.json', {}, {
//       query: {method:'GET', params:{postId:'posts'}, isArray:true}
//     });
//   }]);
// coolServices.factory("chatMessages", ["$firebaseArray",
//   function($firebaseArray) {
//     // create a reference to the database where we will store our data
//     var ref = firebase.database().ref().child("chat");

//     return $firebaseArray(ref);
//   }
// ]);
coolServices.factory("articlePosts", ["$firebaseArray",
  function($firebaseArray) {
    // create a reference to the database where we will store our data
    var ref = firebase.database().ref("articles").child("items");

    return $firebaseArray(ref);
  }
]);

