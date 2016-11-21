'use strict';

angular.module('fuck.fuck', [])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('fuck', {
          url: '/:id',
          templateUrl: 'views/fuck.html',
          controller: 'FuckOff'
        });
    }
  ]);

angular.module('fuck.fuck')
  .controller('FuckOff', ['$scope', 'DB', '$stateParams',
    function ($scope, DB, $stateParams) {
      $scope.load = function () {
        DB.getUser($stateParams.id).then(function (name) {
          $scope.displayName = name;
        });
      };
    }
  ]);
