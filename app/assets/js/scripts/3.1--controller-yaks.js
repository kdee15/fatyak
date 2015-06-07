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
      
      console.log('hello');
      
    //A.3. STEPS ----------------------------------------------------------------------------------------------

    $scope.step = 1;

    //A.3. END --------------------------------------------------------------------------------------------------------
      
    //A.3. BUILD OBJECT ----------------------------------------------------------------------------------------------

    $scope.form = {};
    $scope.form.name = '';
    $scope.form.email = '';
    $scope.form.style = '';

    console.log($scope.form);

    $scope.user = {};
        $scope.user.name = '';
        $scope.user.email = '';
    $scope.beer = {};
        $scope.beer.style = '';
        $scope.beer.styleOwn = '';
        $scope.beer.logo = '';
        $scope.beer.name ='';

    //A.3. END --------------------------------------------------------------------------------------------------------  
      
    //A.1. YAK HEAD LOGO DATA -----------------------------------------------------------------------------------------  
      
    $http.get('data/yaks.json').success(function(data) {
        
      $scope.yaks = data;
        
    });
      
    //A.1. END -------------------------------------------------------------------------------------------------------- 
      
    //A.2. BEER STYLE DATA --------------------------------------------------------------------------------------------
      
    $http.get('data/beers.json').success(function(data) {
        
      $scope.beers = data;
        
    });
      
    //A.2. END --------------------------------------------------------------------------------------------------------
      
    //A.4. ADD USER DETAILS -------------------------------------------------------------------------------------------
      
      $scope.bouForm = function() {
      
        
        var formObject = {
        
            "person" : {

                "name" : $scope.user.name,
                "email" : $scope.user.email

            },
            "theBeer" : {
            
                "style" : $scope.beer.style,
                "logo" : $scope.beer.logo,
                "name" : $scope.beer.name 
        
            }
        
        }
        
        console.log(formObject);
      
        var endpoint = 'http://forgesimpledata.cloudapp.net/FatYakService.svc/InsertFatYakUser/'
        
        var theString = $scope.user.name + '/' + $scope.user.email + '/' + $scope.beer.style + '/' + $scope.beer.name + '/' + $scope.beer.logo
        
        $http.get( endpoint + theString).success(function(data) {
        
          console.log (endpoint + theString);

        });
          
      }
      
    //A.4. END --------------------------------------------------------------------------------------------------------   
      
  }]);

// A. END +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE ========================================================================================================