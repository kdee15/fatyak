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