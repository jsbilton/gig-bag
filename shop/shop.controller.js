// shop controller
(function() {
  'use strict';

  angular
  .module('shop')
  .controller('ShopController', function ($scope, ShopService. $routeParams, LikesService) {
    ShopService.getShops().then(function(shops){
      $scope.shops = shops;
      if($routeParams.shopId){
        $scope.shop = ShopService.getShop($scope.shops, $routeParams.shopId);
      }
    });
    ShopService.gearInfo($routeParams.shopId).success(function (data) {
      $scope.shop = data;
    });
    $scope.addFavorites = function (shop) {
      LikesService.addFavorites(shop);
      prompt('ADDED');
    }
  })

}());
