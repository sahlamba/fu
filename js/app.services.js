'use strict';

angular.module('fuck.service', []);

angular.module('fuck.service')
  .factory('DB', ['$firebaseArray', '$http',
    function ($firebaseArray, $http) {
      var db = firebase.database();
      return {
        createUser: function (userName) {
          var superName = 'random';
          $http.get("http://faker.hook.io/?property=hacker.noun")
            .success(function (data) {
              console.log(data);
              superName = data.replace(/"/g, '');
              superName = superName.toLowerCase().slice(0, -1);
              var randomInt = Math.floor(Math.random() * (99 - 0 + 1)) + 0;
              var userURL = 'users/' + superName + '-' + randomInt;
              console.log(userURL);
              db.ref(userURL).set({
                'name': userName
              });
            }).error(function (error) {
                console.error(error);

            });
        },
        getUser: function (keyStoneString) {
          var name = null;
          db.ref('users/' + keyStoneString).once('value')
            .then(function (snapshot) {
              console.log(snapshot.val().name);
            });
          if (name) {
            return ''; // user page state
          } else {
            return ''; // home state
          }
        }
      };
    }
  ]);
