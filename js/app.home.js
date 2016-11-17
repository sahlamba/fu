'use strict';

angular.module('fuck.home', [])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        });
    }
  ]);

angular.module('fuck.home')
  .controller('HomeCtrl', ['$scope',
    function ($scope) {
      console.log(1);
    }
  ]);
