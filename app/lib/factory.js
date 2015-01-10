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
            all: xebiaData
        };
        return data;
      
    })
    .factory('Auth', function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope) {
      var ref = new Firebase(FIREBASE_URL);
      var auth = $firebaseSimpleLogin(ref);

      var Auth = {
        register: function (user) {
          return auth.$createUser(user.email, user.password);
        },
        login: function (user) {
          return auth.$login('password',user);
        },
        logout: function () {
          auth.$logout();
        },
        resolveUser: function() {
          return auth.$getCurrentUser();
        },
        signedIn: function() {
          return !!Auth.user.provider;
        },
        user: {}
      };

      $rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {
        angular.copy(user, Auth.user);
      });
      $rootScope.$on('$firebaseSimpleLogin:logout', function() {
        angular.copy({}, Auth.user);
      });

      return Auth;
    });