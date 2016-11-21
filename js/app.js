'use strict';

angular.module('fuck-off', [
  'ui.router',
  'firebase',
  'fuck.service',
  'fuck.home',
  'fuck.fuck'
])
angular.module('fuck-off')
.config(function () {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD9fagj71qWynhsatx_vi-_nNqZCxLLqZM",
    authDomain: "fuck-off-8495e.firebaseapp.com",
    databaseURL: "https://fuck-off-8495e.firebaseio.com",
    storageBucket: "fuck-off-8495e.appspot.com",
    messagingSenderId: "723637176217"
  };
  firebase.initializeApp(config);
})
.run(function ($rootScope) {
  // Autoscroll to top on navigating to new route
  $rootScope.$on('$stateChangeSuccess', function() {
     document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});
