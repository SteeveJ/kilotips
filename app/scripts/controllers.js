// Variable
var save = {};
var userConnected;
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

  /*-------------------------*/
  /* Controller: Progression */
  /*-------------------------*/

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


  /*-------------------------*/
  /* Controller:  Sign-up    */
  /*-------------------------*/
  .controller("loginCtrl",function($scope, $http, $state){

      $http({method: 'GET', url: 'http://jerent-steeve.com/APIkilotip/web/app.php/user/api_user'})
        .success(function(data)
        {
          //console.log(data);
          users = data;
          var memory = {};
          // function validation du username et du password
          $scope.connect = function(user){
            // variable
            var validated = true;
            memory = angular.copy(user);

            angular.forEach(users, function(value){
              if(validated === true){
                var username = value.username;
                var password = value.password;
                if(memory.username.toUpperCase() === username.toUpperCase() && memory.password === password){
                  // On recupère l'utilisateur
                  userConnected = angular.copy(value);
                  $scope.userCo = angular.copy(value);
                  console.log(userConnected);
                  $state.go('app.home');
                  validated = false;
                }
              }
            });
          };

          $scope.inscription = function(){
            $state.go('register');
          };
        }).error(function(data, status, headers, config){
          console.log('L\'URL saisie ne renvoie rien !!!');
          alert("Vous n'avez pas de connexion !!");
          console.log(data);
          console.log(status);
          console.log(headers);
          console.log(config);
        });
        //console.log(users);
  })


  /*-------------------------*/
  /* Controller: Profile     */
  /*-------------------------*/
  .controller('ProfileCtrl', function($scope, $state){
    $scope.userCo = angular.copy(userConnected);
    console.log(userConnected);
    if(userConnected.sexe == true){
      $scope.sexe = "Homme"
    }else{
      $scope.sexe = "Femme"
    }
    $scope.edit = function(){
      $scope.userCo = angular.copy(userConnected);
      console.log(userConnected);
      $state.go('editProfile');
    };

  })


  /*--------------------------*/
  /* Controller: Edit profile */
  /*--------------------------*/
  .controller('ProfileEditCtrl', function($scope, $state)
  {
    $scope.userCo = angular.copy(userConnected);
    console.log(userConnected);
    if(userConnected.sexe == true){
      $scope.sexe = "Homme"
    }else{
      $scope.sexe = "Femme"
    }
    $scope.returnHome = function(){
      $state.go('app.home');
    };
  })

  .controller('createUser', function($scope, $http)
  {

    $http({method: 'GET', url: 'http://jerent-steeve.com/APIkilotip/web/app.php/user/api_user'})
      .success(function(data)
      {
        //console.log(data);
        users = data;
        var memory = {};
        // function validation du username et du password
        $scope.signup = function(user){
          // variable
          var doublon = true;
          memory = angular.copy(user);

          angular.forEach(users, function(value){
            if(doublon){
              var username = value.username;
              var Api = "http://127.0.0.1:8000/user/";
              if(memory.username.toUpperCase() === username.toUpperCase()){
                // L'utilisateur existe
                console.log('Il existe');
              }else{
                console.log('Allé on retour un true')
              }
            }
          });
          if(validated === true){
            /*$http.get(Api+"/"+$scope.username+"/"+$scope.password+"/"++"/"+$scope.username+"/"+$scope.username+"/"+$scope.username)
            .success(function(data, status, headers, config) {

              console.log('? ? ?');
            })
              .error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                var line = '--------------------------------------'
                console.log(status);
                console.log(line);
                console.log(headers);
                console.log(line);
                console.log(config);
              });*/
          }

        };

        $scope.inscription = function(){
          $state.go('register');
        };
      }).error(function(data, status, headers, config){
        console.log('L\'URL saisie ne renvoie rien !!!');
        alert("Vous n'avez pas de connexion !!");
        console.log(data);
        console.log(status);
        console.log(headers);
        console.log(config);
      });
    console.log('ok');

  });


