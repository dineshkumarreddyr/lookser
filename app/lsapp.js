var lsApp = angular.module('lsApp',['ui.router']);

lsApp.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
	function ($locationProvider, $stateProvider, $urlRouterProvider) {

		$stateProvider.state('home',{
			url:'/home',
			templateUrl:'app/partials/common.html'
		}).state('home.products',{
			url:'/products',
			templateUrl:'app/partials/inner/products.html'
		});

		$urlRouterProvider.otherwise('/home/products');
	}]);