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
  .controller('HomeCtrl', ['$scope', 'DB', '$state',
    function ($scope, DB, $state) {
      $scope.$on('$viewContentLoaded', function() {
         document.getElementById('name').focus();
      });
      $scope.userName = '';
      $scope.createPage = function () {
        if ($scope.userName) {
          DB.createUser($scope.userName)
          .then(function (data) {
            if (data.status) {
              $state.go('fuck', {'id': data.id});
            } else {
              console.log('Errrror!');
            }
          });
        }
      };
    }
  ]);
