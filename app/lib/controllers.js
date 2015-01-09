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
			var userObj = {
				'email' : $scope.email,
				'password' : $scope.password
			}    
		   
	        Auth.login(userObj).then(function () {
	            $location.path( "/dashboard" );	
	        })
		};
		
	}])
	.controller('xeDashboard',['$scope', '$location', 'xebiaData', 'dataService', '$http', '$q',function($scope, $location, xebiaData, dataService, $http, $q){
		$scope.searchContent;
		// Any function returning a promise object can be used to load values asynchronously
		$scope.getUsers = function(str) {
				var searchData = [];
				return searchData;
				var prom = []	
				prom.push(angular.forEach(xebiaData.all,function(val, index){
					console.log(val, index)
					if(str == val.NAME){
						searchData.push(val);
						return val;
					}
				}));	
				$q.all(prom, function(status){
					console.log(searchData)
					return searchData.data.results.map(function(item){
						return item.NAME;
					});
				})
				/*
			return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
				params: {
					address: val,
					sensor: false
				}
			}).then(function(response){
				return response.data.results.map(function(item){
					return item.formatted_address;
				});
			});*/
		};
		$scope.fn_profileSearch = function(){
			if(!$scope.searchContent){
				//alert("Nothing entered")
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