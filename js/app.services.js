'use strict';

angular.module('fuck.service', []);

angular.module('fuck.service')
  .factory('DB', ['$firebaseArray', '$http', '$q',
    function ($firebaseArray, $http, $q) {
      var db = firebase.database();
      return {
        createUser: function (userName) {
          var defer = $q.defer();
          var superName = 'random';
          $http.get("http://faker.hook.io/?property=internet.domainWord")
            .success(function (data) {
              superName = data.replace(/"/g, ''); // Remove quotes
              superName = superName.toLowerCase().slice(0, -1); // Trim + remove newline char
              var randomInt = Math.floor(Math.random() * (99 - 0 + 1)) + 0; // 0 <= int <= 99
              var userURL = 'users/' + superName + '-' + randomInt;
              userName = userName.toLowerCase().trim().replace(/\b\w/g, function (l) {
                return l.toUpperCase();
              }); // Capitalize string
              db.ref(userURL).set({
                'name': userName
              });
              defer.resolve({
                'id': superName + '-' + randomInt,
                'status': true
              });
            }).error(function (error) {
                defer.resolve({
                  'status': false
                });
                console.error(error);
            });
          return defer.promise;
        },
        getUser: function (keyStoneString) {
          var defer = $q.defer();
          var name = null;
          db.ref('users/' + keyStoneString).once('value')
            .then(function (snapshot) {
              defer.resolve(snapshot.val().name);
            }, function (error) {
                console.log(error);
                defer.resolve(false);
            });
          return defer.promise;
        }
      };
    }
  ]);
