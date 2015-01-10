'use strict';
/* Services */

angular.module('xeApp.services', ['ngRoute']).service('dataService', ['$rootScope', function($rootScope) {
	var searchedData, userData;
	this.setSearchedData = function(val){
		searchedData = val;
	};
	this.getSearchedData = function(val){
		return searchedData;
	};
	this.setUserData = function(val){
		userData = val;
	};
	this.getUserData = function(val){
		return userData;
	};
}]);
