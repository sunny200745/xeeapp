'use strict';
/* Common controllers */

angular.module('xeApp.controllers', ['ui.router', 'chieffancypants.loadingBar'])
	.controller('xeInit',['$scope',function($scope){
	}])
	.controller('xeHeader',['$scope', '$location', 'Auth', '$stateParams', '$rootScope',function($scope, $location, Auth, $stateParams, $rootScope){
		if(angular.isDefined($stateParams.for)){
			$scope.applyFor = $stateParams.for.toUpperCase();
			// Apply a better way to implement this
			$rootScope.applyForHeading = $scope.applyFor;
		}
		
		$scope.logout = function () {				
	        Auth.logout()
	        $location.path( "/home" );
		};
		$scope.doBack = function(){
			$window.history.back();
		}
	}])
	.controller('xeFooter',['$scope', '$location',function($scope, $location){
		$scope.fn_OpenStats = function(){
			$location.path( "/status" );	
		};
		$scope.fn_OpenDashboard = function(){
			$location.path( "/dashboard" );	
		};
	}])
	.controller('xeMain',['$scope', '$location', 'Auth', 'cfpLoadingBar','dataService','xebiaData',function($scope, $location, Auth, cfpLoadingBar, dataService, xebiaData){
		
		$scope.fn_login = function () {		
			cfpLoadingBar.start();
			cfpLoadingBar.inc();
			var userObj = {
				'email' : $scope.email,
				'password' : $scope.password
			}    
		   
	        Auth.login(userObj).then(function () {
	        	cfpLoadingBar.complete();
	        	/* fetch data and set into service*/
	        	var users = [];
    			angular.forEach(xebiaData.all,function(val, index){
    				users.push(val.NAME);				
    			});
    			dataService.setUserData(users);

	        	$location.path( "/dashboard" );	
	        }, function (error) {
		      $scope.error = error.code.split('_')[1]
		      cfpLoadingBar.complete();
		    })
		};
		
	}])
	.controller('xeDashboard',['$scope', '$location', 'xebiaData', 'dataService', '$rootScope', '$q',function($scope, $location, xebiaData, dataService, $rootScope, $q){
			
		$scope.users = dataService.getUserData();
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
	.controller('xeApply',['$scope', '$stateParams', '$rootScope', '$location', function($scope, $stateParams, $rootScope, $location){
		//$scope.applyFor = $stateParams.for;
		//$rootScope.$state.current.data.title = $rootScope.$state.current.data.title+" "+applyFor.toUpperCase();
		$scope.fn_submitApply = function(){
			
			$location.path( "/apply/"+$rootScope.applyForHeading+"/success" );	
		}
		
	}]);