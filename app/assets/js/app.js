// JAVASCRIPT LAYER [1. FONTS]  =======================================================================================

// ====== INDEX  ======================================================================================================
// ==
// == A. FONTS
// ==
// ====== INDEX  ======================================================================================================

// A. SCRIPT NAME +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


var yakApp = angular.module('yakApp', [
    'ngRoute',
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

yakApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    
      when('/', {
        templateUrl: 'partials/landing.html',
        controller: 'PhoneListCtrl'
      }).

      when('/register', {
        templateUrl: 'partials/register.html',
        controller: 'PhoneListCtrl'
      }).

      when('/beer-style', {
        templateUrl: 'partials/yak-beer-style.html',
        controller: 'PhoneListCtrl'
      }).

      when('/yak-head', {
        templateUrl: 'partials/yak-head.html',
        controller: 'yakListCtrl'
      }).

      when('/beer-name', {
        templateUrl: 'partials/yak-beer-name.html',
        controller: 'yakListCtrl'
      }).
    
      when('/beer-name/:yakId', {
        templateUrl: 'partials/yak-beer-name.html',
        controller: 'yakListCtrl'
      }).
    
      when('/beer-bottle', {
        templateUrl: 'partials/yak-beer-bottle.html',
        controller: 'yakListCtrl'
      }).
    
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
    
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
    
      otherwise({
        redirectTo: '/partials/landing.html'
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