'use strict';
/* Common controllers */

angular.module('xeApp.controllers', ['ui.router'])
	.controller('xeInit',['$scope', '$state',function($scope, $state){
		$scope.$state = $state;
	}])
	.controller('xeMain',['$scope', '$state',function($scope, $state){
		$scope.$state = $state;
	}])
	.controller('xeHeader',['$scope', '$state',function($scope, $state){
		$scope.$state = $state;
	}])
	.controller('xeFooter',['$scope', '$state',function($scope, $state){
		$scope.$state = $state;
	}]);