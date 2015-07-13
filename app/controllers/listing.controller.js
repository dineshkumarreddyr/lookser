(function () {
    "use strict";

    // register your controller into a dependent module 
    angular
    .module("lsApp.Controllers",[])
    .controller("ListingController", ["$rootScope", "$scope", "$http", ListingController])
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
    function ListingController($rootScope, $scope, $http) {
        $scope.productsList = [
            { 'id': 1, 'category': 'Shirts' },
            { 'id': 2, 'category': 'T-Shirts' },
            { 'id': 3, 'category': 'Sports Wear'}
        ];
        $scope.products = [
        {
            "id": 1,
            "category": "Shirts",
            "provider": "Myntra",
            "imgUrl": "../../app/assets/images/trending/t1.jpg",
            "actualCost": "2300",
            "discountCost":"2000",
            "productName": "CLASSIC CHICK LOOK"
        },
         {
             "id": 2,
             "category": "Shirts",
             "provider": "Myntra",
             "imgUrl": "../../app/assets/images/trending/t2.jpg",
             "actualCost": "2300",
             "discountCost":"2000",
             "productName": "CLASSIC CHICK LOOK"
         },
        {
            "id": 3,
            "category": "Sports Wear",
            "provider": "Flipkart",
            "imgUrl": "../../app/assets/images/trending/t3.jpg",
            "actualCost": "2300",
            "discountCost":"2000",
            "productName": "CLASSIC CHICK LOOK"
        },
        {
            "id": 4,
            "category": "Sports Wear",
            "provider": "Flipkart",
            "imgUrl": "../../app/assets/images/trending/t4.jpg",
            "actualCost": "2300",
            "discountCost":"2000",
            "productName": "CLASSIC CHICK LOOK"
        },
        {
            "id": 5,
            "category": "Sports Wear",
            "provider": "Flipkart",
            "imgUrl": "../../app/assets/images/trending/t5.jpg",
            "actualCost": "2300",
            "discountCost":"2000",
            "productName": "CLASSIC CHICK LOOK"
        },
        {
            "id": 6,
            "category": "Shirts",
            "provider": "Jabong",
            "imgUrl": "../../app/assets/images/trending/t6.jpg",
            "actualCost": "2300",
            "discountCost":"2000",
            "productName": "CLASSIC CHICK LOOK"
        },
        {
            "id": 7,
            "category": "Shirts",
            "provider": "Jabong",
            "imgUrl": "../../app/assets/images/trending/t7.jpg",
            "actualCost": "2300",
            "discountCost":"2000",
            "productName": "CLASSIC CHICK LOOK"
        },
        {
            "id": 8,
            "category": "Shirts",
            "provider": "Yepme",
            "imgUrl": "../../app/assets/images/trending/t8.jpg",
            "actualCost": "2300",
            "discountCost":"2000",
            "productName": "CLASSIC CHICK LOOK"
        },
        {
            "id": 9,
            "category": "t-Shirts",
            "provider": "Yepme",
            "imgUrl": "../../app/assets/images/trending/t1.jpg",
            "actualCost": "2300",
            "discountCost":"2000",
            "productName": "CLASSIC CHICK LOOK"
        },
        {
            "id": 10,
            "category": "t-Shirts",
            "provider": "Fashionara",
            "imgUrl": "../../app/assets/images/trending/t2.jpg",
            "actualCost": "2300",
            "discountCost":"2000",
            "productName": "CLASSIC CHICK LOOK"
        }
        ];
        $scope.selectedProviders = [];
        $scope.selectedCategories = [];
        $scope.contentAllItems = $scope.products;
        $scope.filterFun = function (data, data1) {
            console.log(data + ' in filter ' +data1)
            if (data1 == 'provider') {
                var idx = $scope.selectedProviders.indexOf(data);
                if (idx > -1) {
                    $scope.selectedProviders.splice(idx, 1);
                }
                else {
                    $scope.selectedProviders.push(data);
                }
            }
            else if (data1 == 'category') {
                var idx = $scope.selectedCategories.indexOf(data);
                if (idx > -1) {
                    $scope.selectedCategories.splice(idx, 1);
                }
                else {
                    $scope.selectedCategories.push(data);
                }
            }
            if ($scope.selectedProviders.length > 0 && $scope.selectedCategories.length > 0) {
                console.log('in provider & category');
                var temp = [], temp1 = [], b = [], c = [], d = [];
                $scope.contentAllItems = [];
                $scope.selectedCategories.forEach(function (categ) {
                    $scope.selectedProviders.forEach(function (frame) {
                        temp = $scope.products.filter(function (element, index, array) {
                            return element.category == categ && element.provider.indexOf(frame) >= 0;
                        });
                    });
                    b = $scope.contentAllItems.concat(temp);
                    $scope.contentAllItems = b.filter(function (item, pos) { return b.indexOf(item) == pos });
                });
            }
            else if ($scope.selectedProviders.length > 0) {
                console.log('in provider');
                var temp = [], c = [];
                $scope.contentAllItems = [];
                $scope.selectedProviders.forEach(function (item) {
                    temp = $scope.products.filter(function (element, index, array) {
                        return element.provider.indexOf(item) >= 0;
                    });
                    c = $scope.contentAllItems.concat(temp); 
                    $scope.contentAllItems = c.filter(function (item, pos) { return c.indexOf(item) == pos });
                });
            }
            else if ($scope.selectedCategories.length > 0) {
                console.log('in category');
                var temp = [];
                $scope.contentAllItems = [];
                $scope.selectedCategories.forEach(function (item) {
                    temp = $scope.products.filter(function (element, index, array) {
                        return element.category == item;
                    });
                    $scope.contentAllItems = $scope.contentAllItems.concat(temp);
                    
                });
                console.log($scope.contentAllItems);
            }
            else if ($scope.selectedProviders.length == 0 && $scope.selectedCategories.length == 0) {
                $scope.contentAllItems = $scope.products;
            }
        };
    };

    // this is the constructor to your controller class
    ListingController.prototype.initialize = function (data) {
        console.log(data);
    }
})();