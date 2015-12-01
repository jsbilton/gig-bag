// shop module - copy paste modify
(function () {
  "use strict";

  angular
    .module('shop', [
      'ngRoute',
      'underscore',
      'moment'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/shop',{
          templateUrl: 'shop/views/list.html', //have to setup views and list.html
          controller: 'ShopController'
        })
        .when('/shop/:shopId',{
          templateUrl: 'shop/views/detail.html', //setup detail.html
          controller: 'ShopController'
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
