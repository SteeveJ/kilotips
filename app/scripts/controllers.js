angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
  // Base de donner Sqlite
  // TODO : Rechercher la commande pour installer sqlite

  // Lien API
  // TODO: Faire le controller pour lier l'api et l'appli

// Chart Poids
.controller('ChartCtrl', function($scope) {
        $scope.labels = ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70"];
        $scope.series = ['Normal', 'Votre Poids'];
        // TODO: Récuperer les informations de la base SQLite
        //Faire un tableau avec la courbe de moyenne de poids
        var minpoids = [10, 20, 30, 40, 50, 60, 70, 80];
        var poids = [15, 25, 35, 45, 55, 65, 75, 85];
        var maxpoids = [20, 30, 40, 50, 60, 70, 80, 90, 100];
        $scope.data = [
            minpoids,
            poids,
            maxpoids
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
})

