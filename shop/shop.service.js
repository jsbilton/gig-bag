(function() {
  'use strict';

    angular
    .module('shop')
    .factory('ShopServices', function ($http) {

      var categoriesUrl = "https://reverb.com/api/comparison_shopping";
      var getCategories = function () {
        return $http.get(categoriesUrl);
      };

      return {
        getCategories: getCategories
      }



    })



}());
