var lsApp = angular.module('lsApp',['ui.router','lsApp.Services','lsApp.Controllers']);

lsApp.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
	function ($locationProvider, $stateProvider, $urlRouterProvider) {

		$stateProvider.state('home',{
			url:'/home',
			templateUrl:'app/partials/common.html'
		}).state('home.products',{
			url:'/products',
			templateUrl:'app/partials/inner/products.html'
			
		}).state('home.createlook',{
			url:'/createlook',
			templateUrl:'app/partials/inner/createlook.html',
			controller:'CreatelookController'
		}).state('home.listing',{
			url:'/listing',
			templateUrl:'app/partials/inner/listing.html',
			controller:'ListingController'
		});

		$urlRouterProvider.otherwise('/home/products');
	}]);