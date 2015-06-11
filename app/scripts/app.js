// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
db = null;
angular.module('starter', ['ionic', 'starter.controllers', 'chart.js', 'ngCordova', 'ngSanitize'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})



.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $stateProvider

    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html",
      controller:   'loginCtrl'

    })

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })
    /* return template Progression */
    .state('app.progression', {
      url: "/progression",
      views: {
        'menuContent': {
          templateUrl: "templates/progression.html",
            controller: 'ChartCtrl'
        }
      }
    })
    /* return template Journal */
    .state('app.journal', {
      url: "/journal",
      views: {
        'menuContent': {
          templateUrl: "templates/journal.html"
        }
      }
    })
    /* return template Home */
    .state('app.home', {
      url: "/home",
      views: {
        'menuContent': {
          templateUrl: "templates/home.html",
          controller: 'ProfileCtrl'
        }
      }
    })

    .state('app.calories', {
      url: "/calories",
      views: {
        'menuContent': {
          templateUrl: "templates/calories.html"
        }
      }
    })
    .state('editProfile', {
      url: "/profile/edit",
      templateUrl: "templates/editProfile.html",
      controller: 'ProfileEditCtrl'
    })

        /* return template register */
    .state('register', {
      url: "/inscription",
      templateUrl: "templates/register.html",
      controller: "createUser"
    })

          /* return template archives */
    .state('app.archives', {
      url: "/archives",
      views: {
        'menuContent': {
          templateUrl: "templates/archives.html"
        }
      }
    })

            /* return template diagramme */
    .state('app.diagramme', {
      url: "/diagramme",
      views: {
        'menuContent': {
          templateUrl: "templates/diagramme.html"//,
          //controller: 'diag'
        }
      }
    })
;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
