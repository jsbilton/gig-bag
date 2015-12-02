// // cart module - copy paste modify
// (function () {
//   "use strict";
//
//   angular
//     .module('gigBag', [
//       'ngRoute',
//       'underscore',
//       'moment',
//     ])
//     .config(function ($routeProvider) {
//       $routeProvider
//         .when('/likes', {
//           template: '<h1>Gear for Me</h1><a href="#/gearlist">Search by Gear</a>',
//           controller: 'MainController'
//         })
//         .when('/likeslist',{
//           template: 'likes/views/list.html', //have to setup views and list.html
//           controller: 'LikesController'
//         })
//         .when('/likes/:likesId',{
//           template: 'likes/views/detail.html', //setup detail.html
//           controller: 'LikesController'
//         })
//         .when('/404', {
//           template: '<h1> Sorry, the page you are attemping to access cannot be found!</h1>'
//         })
//         .otherwise({ redirectTo: '/404'});
//     });
//     angular
//       .module('underscore', [])
//       .factory('_', function ($window) {
//         return $window._;
//       });
//     angular
//       .module('moment', [])
//       .factory('moment', function ($window) {
//         return $window.moment;
//       });
//
// })();
