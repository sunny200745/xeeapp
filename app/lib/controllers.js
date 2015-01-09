'use strict';
/* Common controllers */

angular.module('xeApp.controllers', ['ui.router'])
	.controller('xeInit',['$scope',function($scope){
	}])
	.controller('xeHeader',['$scope',function($scope){
	}])
	.controller('xeFooter',['$scope',function($scope){
	}])
	.controller('xeMain',['$scope', '$location',function($scope,$location){
		$scope.fn_login = function(){			
			$location.path( "/dashboard" );
		};
	}])
	.controller('xeDashboard',['$scope', '$location', 'xebiaData', '$rootScope',function($scope, $location, xebiaData, $rootScope){
		$scope.searchContent;
		

		$scope.fn_profileSearch = function(){	
			angular.forEach(xebiaData.all,function(val, index){
				if($scope.searchContent === val.ID){
					$rootScope.searchedData = val;
					return false
				}
			});		
			if(!$rootScope.searchedData){
				alert("No Data Matched")
				return false;
			}
			$location.path( "/profile/test" );
		};
	}])
	.controller('xeUserProfile',['$scope', '$stateParams', '$rootScope', function($scope, $stateParams, $rootScope){
		$scope.data = $rootScope.searchedData
		
	}])
	.controller('xeApply',['$scope', '$stateParams', function($scope, $stateParams){
		
	}]);