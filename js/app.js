'use strict';

angular.module('fuck-off', [
  'ui.router',
  'firebase',
  'fuck.home',
  'fuck.fuck'
])
.run(function ($rootScope) {
  // Autoscroll to top on navigating to new route
  $rootScope.$on('$stateChangeSuccess', function() {
     document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});
