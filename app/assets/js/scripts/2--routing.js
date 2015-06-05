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