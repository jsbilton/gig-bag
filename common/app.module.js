// common module
(function () {
  "use strict";

  angular
    .module('gigBag', [
      'ngRoute',
      'underscore',
      'moment',
      'shop'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: '<h1>Welcome to Gig Bag</h1><a href="#/gearlist">Search by Gear</a>',
          controller: 'MainController'
        })
        .when('/404', {
          template: '<h1> Sorry, the page you are attemping to access cannot be found!</h1>'
        })
        .otherwise({ redirectTo: '/404'});
    });
    angular
      .module('underscore', [])
      .factory('_', function ($window) {
        return $window._;
      });
    angular
      .module('moment', [])
      .factory('moment', function ($window) {
        return $window.moment;
      });

})();
