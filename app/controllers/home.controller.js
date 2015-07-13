(function () {
    "use strict";

    // register your controller into a dependent module 
    angular
    .module("lsApp.Controllers",[])
    .controller("HomeController", ["$rootScope", "$scope", "$http", HomeController])
    .filter('unique', function () {

        return function (arr, field) {
            var o = {}, i, l = arr.length, r = [];
            for (i = 0; i < l; i += 1) {
                o[arr[i][field]] = arr[i];
            }
            for (i in o) {
                r.push(o[i]);
            }
            return r;
        };
    });

    // controller class definintion
    function HomeController($rootScope, $scope, $http) {
        console.log('in');
    };

    // this is the constructor to your controller class
    HomeController.prototype.initialize = function (data) {
        console.log(data);
    }
})();