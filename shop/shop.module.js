// shop module - copy paste modify
(function () {
  "use strict";

  angular
    .module('flickrgram', [
      'ngRoute',
      'underscore',
      'moment',
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/',{
          template: 'shop/views/list.html', //have to setup views and list.html
          controller: 'ShopCntrl'
        })
        .when('/:shopId',{
          template: 'shop/views/detail.html', //setup detail.html
          controller: 'ShopCntrl'
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
