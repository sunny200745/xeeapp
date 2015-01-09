'use strict';
// Declare app level module which depends on filters, and services
angular.module('xeApp', [
  'ngRoute',
  'xeApp.filters',
  'xeApp.services',
  'xeApp.directives',
  'xeApp.controllers',
  'xeApp.factory',
  'ui.bootstrap'
])
.config(["$locationProvider", "$stateProvider", "$urlRouterProvider", "$httpProvider", function($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('home', {
      url: "/home",
      views: { 
        'header': { templateUrl: 'partials/common/header.html', controller: 'xeHeader' },
        'main': { templateUrl: 'partials/login.html', controller: 'xeMain' },
        'footer': { templateUrl: 'partials/common/footer.html', controller: 'xeFooter' }
      }
    })
    .state('dashboard', {
      url: "/dashboard",
      views: { 
        'header': { templateUrl: 'partials/common/header.html', controller: 'xeHeader' },
        'main': { templateUrl: 'partials/dashboard.html', controller: 'xeDashboard' },
        'footer': { templateUrl: 'partials/common/footer.html', controller: 'xeFooter' }
      }
    })
    .state('apply', {
      url: "/apply",
      views: { 
        'header': { templateUrl: 'partials/common/header.html', controller: 'xeHeader' },
        'main': { templateUrl: 'partials/apply.html', controller: 'xeApply' },
        'footer': { templateUrl: 'partials/common/footer.html', controller: 'xeFooter' }
      }
    })
    .state('applyFor', {
      url: "/apply/:for",
      views: { 
        'header': { templateUrl: 'partials/common/header.html', controller: 'xeHeader' },
        'main': { templateUrl: 'partials/apply.html', controller: 'xeApply' },
        'footer': { templateUrl: 'partials/common/footer.html', controller: 'xeFooter' }
      }
    })
    .state('applySuccess', {
      url: "/apply/:for/success",
      views: { 
        'header': { templateUrl: 'partials/common/header.html', controller: 'xeHeader' },
        'main': { templateUrl: 'partials/applySuccess.html', controller: 'xeApply' },
        'footer': { templateUrl: 'partials/common/footer.html', controller: 'xeFooter' }
      }
    })
    .state('profileDetail', {
      url: "/profile/:profileID",
      views: { 
        'header': { templateUrl: 'partials/common/header.html', controller: 'xeHeader' },
        'main': { templateUrl: 'partials/profile.html', controller: 'xeUserProfile' },
        'footer': { templateUrl: 'partials/common/footer.html', controller: 'xeFooter' }
      }
    });
    $urlRouterProvider.otherwise('/home');
  }]).run(function ($state,$rootScope) {
    $rootScope.$state = $state;
  });