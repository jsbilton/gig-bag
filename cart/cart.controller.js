// cart controller
(function() {
  'use strict';

  angular
  .module('cart')
  .controller('CartController', function ($scope, CartService, $routeParams) {
    CartService.getCart().then(function(cart{
      $scope.cart = cart;
      if($routeParams.cartId){
        $scope.likes = CartService.getCart($scope.cart, $routeParams.cartId);
      }
    });
    $scope.getLikes = function (cart) {
      CartService.getLikes(cart);
    };
    //var vm = this;
    //vm.alertMe = function () {
    //  alert("I works!");
    //};
    
  });

}());
