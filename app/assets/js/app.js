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
            controller: ''
        })
    
        .state('register', {
            url: '/register',
            templateUrl: 'partials/register.html',
            controller: ''
        })
        
        .state('beer-style', {
            url: '/beer-style',
            templateUrl: 'partials/yak-beer-style.html',
            controller: ''
        })
            
        .state('yak-head', {
            url: '/yak-head',
            templateUrl: 'partials/yak-head.html',
            controller: 'yakListCtrl'
        })
                
        .state('beer-name', {
            url: '/beer-name',
            templateUrl: 'partials/yak-beer-name.html',
            controller: ''
        })
                    
        .state('beer-bottle', {
            url: '/beer-bottle',
            templateUrl: 'partials/yak-beer-bottle.html',
            controller: ''
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
    $http.get('data/yaks.json').success(function(data) {
      $scope.yaks = data;
    });
      
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