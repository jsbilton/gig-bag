// // likes controller
// (function() {
//   'use strict';
//
//   angular
//   .module('likes')
//   .controller('LikesController', function ($scope, LikesService, $routeParams) {
//     LikesService.getLikes().then(function(like){
//       $scope.likes = likes;
//       if($routeParams.likesId){
//         $scope.likes = LikesService.getLikes($scope.likes, $routeParams.likesId);
//       }
//     });
//     $scope.getLikes = function (shop) {
//       LikesService.getLikes(shop);
//     };
//
//   });
//
// }());
