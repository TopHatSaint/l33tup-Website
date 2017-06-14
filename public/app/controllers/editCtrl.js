// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("editCtrl", function($scope, mainService, $state , $stateParams) {
  // VARIABLES
  // ============================================================
console.log($stateParams.id);
  // FUNCTIONS
  // ============================================================
  mainService.getIdea($stateParams.id).then(function(response) {
    console.log(response[0]);

    console.log('hello')
    $scope.editIdea = response[0];

  });

  $scope.editIdeas = function() {
      mainService.editIdeas($scope.editIdea.id , $scope.editIdea)
      $state.go("home");
  }
});
