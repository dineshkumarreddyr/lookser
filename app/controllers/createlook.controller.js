(function () {
    "use strict";

    // register your controller into a dependent module 
    lsApp.controller("CreatelookController", ["$rootScope", "$scope", "$http","$log", CreatelookController]);
    

    // controller class definintion
    function CreatelookController($rootScope, $scope, $http,$log) {

        function init(){
            this.getProducts  = function(){
                $http.get('app/services/products.json').success(function(res,status,headers,conf){
                    debugger;
                    if(res!=undefined){
                        $scope.createlookProducts = res.products;
                    }
                }).error(function(res,status,headers,conf){
                    $log.error(res);
                })
            } 
        }
        (new init()).getProducts();
        $scope.selectedProducts = [];
        $scope.addToLook = function (prod, e) {
            e.preventDefault();
            $scope.selectedProducts.push(prod);
        }
        $scope.removeProd = function (prod) {
            $scope.selectedProducts.splice(prod,1);
        }
    };

    // this is the constructor to your controller class
    CreatelookController.prototype.initialize = function (data) {
        console.log(data);
    }
})();