'use strict';
/* Common controllers */

angular.module('xeApp.controllers', ['ui.router'])
	.controller('xeInit',['$scope',function($scope){
	}])
	.controller('xeHeader',['$scope',function($scope){
	}])
	.controller('xeFooter',['$scope',function($scope){
	}])
	.controller('xeMain',['$scope','$location',function($scope,$location){
		$scope.fn_login = function(){			
			$location.path( "/dashboard" );
		};
	}])
	.controller('xeDashboard',['$scope','$location',function($scope,$location){
		$scope.fn_profileSearch = function(){			
			$location.path( "/profile/test" );
		};
	}])
	.controller('xeUserProfile',['$scope', '$stateParams', function($scope, $stateParams){
		//$stateParams.profileId
	}])
	.controller('xeApply',['$scope', '$stateParams', function($scope, $stateParams){
		
	}]);