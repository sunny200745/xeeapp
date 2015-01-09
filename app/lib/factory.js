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
    })
    .factory('xebiaData', function ($firebase, FIREBASE_URL) {
        var ref = new Firebase(FIREBASE_URL);
        var xebiaData = $firebase(ref.child('xebiaData')).$asArray();

        var data = {
            all: xebiaData,       
            get: function (postId) {
              return $firebase(ref.child('xebiaData').child(postId)).$asObject();
            }
        };
        return data;
      
    });