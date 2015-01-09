'use strict';
/* Factory */

angular.module('xeApp.factory', [])
    .factory("postFactory", function($q, $http) {
        var deffered = $q.defer();
        return {
            // Quantity Update  /////////////////////////////////////////////
            quantityUpdate : function(data){
                var deffered = $q.defer();
                $http.post('service/quantity/', data).then(
                    function(response) { deffered.resolve(response); },
                    function(error){ deffered.reject(error); }
                )
                return deffered.promise;
            },
            // Price Update  /////////////////////////////////////////////
            priceUpdate : function(data){
                var deffered = $q.defer();
                $http.post('service/price/', data).then(
                    function(response) { deffered.resolve(response); },
                    function(error){ deffered.reject(error); }
                )
                return deffered.promise;
            }
        } 
    });