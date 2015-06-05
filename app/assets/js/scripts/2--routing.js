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