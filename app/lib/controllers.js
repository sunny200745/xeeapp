'use strict';
/* Common controllers */

angular.module('xeApp.controllers', ['ui.router', 'chieffancypants.loadingBar'])
	.controller('xeInit',['$scope',function($scope){
	}])
	.controller('xeHeader',['$scope', '$location', 'Auth', '$stateParams',function($scope, $location, Auth, $stateParams){
		if(angular.isDefined($stateParams.for)){
			$scope.applyFor = $stateParams.for.toUpperCase();
		}
		
		$scope.logout = function () {				
	        Auth.logout()
	        $location.path( "/home" );
		};
		$scope.doBack = function(){
			$window.history.back();
		}
	}])
	.controller('xeFooter',['$scope',function($scope){
	}])
	.controller('xeMain',['$scope', '$location', 'Auth', 'cfpLoadingBar',function($scope, $location, Auth, cfpLoadingBar){
		
		$scope.fn_login = function () {		
			cfpLoadingBar.start();
			cfpLoadingBar.inc();
			var userObj = {
				'email' : $scope.email,
				'password' : $scope.password
			}    
		   
	        Auth.login(userObj).then(function () {
	        	cfpLoadingBar.complete();
	        	$location.path( "/dashboard" );	
	        }, function (error) {
		      console.debug(error)
		      $scope.error = error.code.split('_')[1]
		      cfpLoadingBar.complete();
		    })
		};
		
	}])
	.controller('xeDashboard',['$scope', '$location', 'xebiaData', 'dataService', '$http', '$q',function($scope, $location, xebiaData, dataService, $http, $q){
		var users = [];
		angular.forEach(xebiaData.all,function(val, index){
			users.push(val.NAME);				
		});		
		$scope.users = users;

		$scope.fn_profileSearch = function(){
			if(!$scope.searchContent){
				return false;
			}else{
				
				var xebiaId, xebeeName = $scope.searchContent;				
				angular.forEach(xebiaData.all,function(val, index){
					if(xebeeName == val.NAME){
						xebiaId = val.ID;
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
	.controller('xeApply',['$scope', '$stateParams', '$rootScope', function($scope, $stateParams, $rootScope){
		//$scope.applyFor = $stateParams.for;
		//$rootScope.$state.current.data.title = $rootScope.$state.current.data.title+" "+applyFor.toUpperCase();
		
	}]);