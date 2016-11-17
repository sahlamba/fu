'use strict';

angular.module('fuck.fuck', [])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('fuck', {
          url: '/{id}',
          templateUrl: 'views/fuck.html',
          controller: 'FuckOff'
        });
    }
  ]);

angular.module('fuck.fuck')
  .controller('FuckOff', ['$scope',
    function ($scope) {
      console.log(2);
    }
  ]);
