'use strict';
/* Services */

angular.module('xeApp.services', ['ngRoute']).service('dataService', ['$rootScope', function($rootScope) {
	var searchedData;
	this.setSearchedData = function(val){
		searchedData = val
	};
	this.getSearchedData = function(val){
		return searchedData;
	};
}]);
