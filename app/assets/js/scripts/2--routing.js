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