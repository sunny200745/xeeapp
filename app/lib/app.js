'use strict';
// Declare app level module which depends on filters, and services
angular.module('xeApp', [
  'firebase',
  'ngRoute',
  'xeApp.filters',
  'xeApp.services',
  'xeApp.directives',
  'xeApp.controllers',
  'xeApp.factory',
  'ui.bootstrap',
  'chieffancypants.loadingBar',
  'ngAnimate'
])
.config(["$locationProvider", "$stateProvider", "$urlRouterProvider", "$httpProvider", "cfpLoadingBarProvider", function($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, cfpLoadingBarProvider) {
  $stateProvider
    .state('home', {
      url: "/home",
      data: {title: "Home"},
      views: { 
        'header': { templateUrl: 'partials/common/header.html', controller: 'xeHeader' },
        'main': { templateUrl: 'partials/login.html', controller: 'xeMain' },
        'footer': { templateUrl: 'partials/common/footer.html', controller: 'xeFooter' }
      }
    })
    .state('dashboard', {
      url: "/dashboard",
      data: {title: "Dashboard"},
      views: { 
        'header': { templateUrl: 'partials/common/header.html', controller: 'xeHeader' },
        'main': { templateUrl: 'partials/dashboard.html', controller: 'xeDashboard' },
        'footer': { templateUrl: 'partials/common/footer.html', controller: 'xeFooter' }
      }
    })
    .state('apply', {
      url: "/apply",
      data: {title: "Apply"},
      views: { 
        'header': { templateUrl: 'partials/common/header.html', controller: 'xeHeader' },
        'main': { templateUrl: 'partials/apply.html', controller: 'xeApply' },
        'footer': { templateUrl: 'partials/common/footer.html', controller: 'xeFooter' }
      }
    })
    .state('applyFor', {
      url: "/apply/:for",
      data: {title: "Apply for "},
      views: { 
        'header': { templateUrl: 'partials/common/header.html', controller: 'xeHeader' },
        'main': { templateUrl: 'partials/apply.html', controller: 'xeApply' },
        'footer': { templateUrl: 'partials/common/footer.html', controller: 'xeFooter' }
      }
    })
    .state('applySuccess', {
      url: "/apply/:for/success",
      data: {title: "Success"},
      views: { 
        'header': { templateUrl: 'partials/common/header.html', controller: 'xeHeader' },
        'main': { templateUrl: 'partials/applySuccess.html', controller: 'xeApply' },
        'footer': { templateUrl: 'partials/common/footer.html', controller: 'xeFooter' }
      }
    })
    .state('status', {
      url: "/status",
      data: {title: "Current Status"},
      views: { 
        'header': { templateUrl: 'partials/common/header.html', controller: 'xeHeader' },
        'main': { templateUrl: 'partials/status.html', controller: 'xeApply' },
        'footer': { templateUrl: 'partials/common/footer.html', controller: 'xeFooter' }
      }
    })
    .state('profileDetail', {
      url: "/profile/:profileID",
      data: {title: "Profile"},
      views: { 
        'header': { templateUrl: 'partials/common/header.html', controller: 'xeHeader' },
        'main': { templateUrl: 'partials/profile.html', controller: 'xeUserProfile' },
        'footer': { templateUrl: 'partials/common/footer.html', controller: 'xeFooter' }
      }
    });
    $urlRouterProvider.otherwise('/home');
    cfpLoadingBarProvider.includeSpinner = false;
  }]).run(function ($state,$rootScope) {
    $rootScope.$state = $state;
  }).constant('FIREBASE_URL', 'https://xeeapp.firebaseio.com/');;
