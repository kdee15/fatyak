// JAVASCRIPT LAYER [1. FONTS]  =======================================================================================

// ====== INDEX  ======================================================================================================
// ==
// == A. FONTS
// ==
// ====== INDEX  ======================================================================================================

// A. SCRIPT NAME +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// app.js
var yakApp = angular.module('yakApp', [
    
    'ngAnimate',
    'ui.router',
    'yakControllers',
    'phonecatControllers'
                                      
]); 

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE ========================================================================================================
// JAVASCRIPT LAYER [1. FONTS]  =======================================================================================

// ====== INDEX  ======================================================================================================
// ==
// == A. FONTS
// ==
// ====== INDEX  ======================================================================================================

// A. SCRIPT NAME +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



yakApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
    
        .state('home', {
            url: '/home',
            templateUrl: 'partials/landing.html',
            controller: 'yakListCtrl'
        })
    
        .state('register', {
            url: '/register',
            templateUrl: 'partials/1__register.html',
            controller: 'yakListCtrl'
        })
        
        .state('beer-style', {
            url: '/beer-style',
            templateUrl: 'partials/2__beer-style.html',
            controller: 'yakListCtrl'
        })
            
        .state('yak-head', {
            url: '/yak-head',
            templateUrl: 'partials/3__yak-head.html',
            controller: 'yakListCtrl'
        })
                
        .state('beer-name', {
            url: '/beer-name',
            templateUrl: 'partials/4__beer-name.html',
            controller: 'yakListCtrl'
        })
                    
        .state('beer-bottle', {
            url: '/beer-bottle',
            templateUrl: 'partials/5__beer-bottle.html',
            controller: 'yakListCtrl'
        })
    
    });

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE ========================================================================================================
// JAVASCRIPT LAYER [1. FONTS]  =======================================================================================

// ====== INDEX  ======================================================================================================
// ==
// == A. FONTS
// ==
// ====== INDEX  ======================================================================================================

// A. SCRIPT NAME +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var yakControllers = angular.module('yakControllers', []);

yakControllers.controller('yakListCtrl', ['$scope', '$http',
  function($scope, $http) {
      
    //A.3. STEPS ------------------------------------------------------------------------------------------------------

      $scope.step = 1;

    //A.3. END --------------------------------------------------------------------------------------------------------
      
    //A.4. BUTTON TOGGLE ----------------------------------------------------------------------------------------------
      
    $scope.viewing = 'null';
      
    $scope.chosenLogo = 'null';
      
    $scope.active = false;
      
      
    //A.4. END --------------------------------------------------------------------------------------------------------
      
    //A.1. YAK HEAD LOGO DATA -----------------------------------------------------------------------------------------  
      
    $http.get('data/yaks.json').success(function(data) {
        
      $scope.yaks = data;
        
    });
      
    //A.1. END --------------------------------------------------------------------------------------------------------
      
    //A.4. ADD USER DETAILS -------------------------------------------------------------------------------------------
      
      $scope.bouForm = function() {
      
        $scope.active = !$scope.active;
          
        var endpoint = 'http://forgesimpledata.cloudapp.net/FatYakService.svc/InsertFatYakUser/';
        
        var theString = $scope.user.name + '/' + 
                        $scope.user.email + '/' + 
                        $scope.beer.style + '/' + 
                        $scope.beer.name + '/' + 
                        $scope.beer.logo;
        
        $http.get( endpoint + theString).success(function(data) {
        
            console.log (data);

        });
          
      }
      
    //A.4. END --------------------------------------------------------------------------------------------------------   
      
  
      
  }]);

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE ========================================================================================================
// JAVASCRIPT LAYER [1. FONTS]  =======================================================================================

// ====== INDEX  ======================================================================================================
// ==
// == A. FONTS
// ==
// ====== INDEX  ======================================================================================================

// A. SCRIPT NAME +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('the-phones/our-phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('the-phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
    });
  }]);


// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE ========================================================================================================