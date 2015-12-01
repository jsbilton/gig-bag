// (function() {
//   'use strict';
//
//   angular
//   .module('likes')
//   .factory('LikesService', function ($http, $rootScope) {
//     var url = 'https://tiny-tiny.herokuapp.com/collections/gigbag';
//     var getLikedItem = function () {
//       return $http.get(url);
//     };
//
//     var addLikedItem = function (item) {
//       $http.post(url, photo).success(function (response) {
//         console.log(response);
//         $rootScope.$broadcast('like:added');
//       });
//     };
//
//     var getOneItem = function (itemId) {
//       return $http.get(url + '/' + itemId);
//     };
//
//     var removeLikedItem = function (itemId) {
//       $http.delete(url + '/' + itemId).then(function (response) {
//         console.log(response);
//         $rootScope.$broadcast('like:deleted');
//       });
//     };
//
//     var updateLikedItem = function (item) {
//       $http.put(url + '/' + item._id, item).then(function (response) {
//         console.log(response);
//       });
//     };
//
//     return {
//       getLikes: getLikedItem,
//       getOneItem: getOneItem,
//       removeItem: removeLikedItem,
//       updateLikedItem: updateLikedItem
//     };
//
//
//
//   })
//
// }());
