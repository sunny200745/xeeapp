'use strict';
/* Common controllers */

angular.module('xeApp.controllers', ['ui.router'])
	.controller('xeInit',['$scope',function($scope){
	}])
	.controller('xeHeader',['$scope',function($scope){
	}])
	.controller('xeFooter',['$scope',function($scope){
	}])
	.controller('xeMain',['$scope', '$location', 'Auth',function($scope, $location, Auth){
		$scope.fn_login = function () {
		    Auth.login($scope.user).then(function() {
		        $location.path( "/dashboard" );		     
		    });
		};
		
	}])
	.controller('xeDashboard',['$scope', '$location', 'xebiaData', 'dataService',function($scope, $location, xebiaData, dataService){
		$scope.searchContent;
		

		$scope.fn_profileSearch = function(){
			if(!$scope.searchContent){
				alert("Nothing entered")
				return false;
			}else{
				var xebiaId = $scope.searchContent.match(/xi/gi) ? $scope.searchContent.toUpperCase() : 'XI'+$scope.searchContent;	
				angular.forEach(xebiaData.all,function(val, index){
					if(xebiaId == val.ID){
						dataService.setSearchedData(val);
						return false
					}
				});		
				if(!dataService.getSearchedData()){
					alert("No Data Matched")
					return false;
				}
				$location.path( "/profile/"+xebiaId );
			}

			
		};
	}])
	.controller('xeUserProfile',['$scope', '$stateParams', 'dataService', function($scope, $stateParams, dataService){
		$scope.data = dataService.getSearchedData();
		
	}])
	.controller('xeApply',['$scope', '$stateParams', function($scope, $stateParams){
		
	}]);