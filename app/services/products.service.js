(function () {
    "use strict";

    // register your service into a dependent module.
    angular
         .module("lsApp.Services",[])
         .service("getProductsService", ["$http", getProductsService]);

    // service definition. note this is a singleton class.
    function getProductsService($http) {
        this.get = function () {
            return $http.get('/products.json');
        }
    }
})();
