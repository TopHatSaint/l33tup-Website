// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("homeCtrl", function($scope, $window, mainService, $state , $stateParams) {
  // VARIABLES
  // ============================================================

  // FUNCTIONS
  // ============================================================
  $(document).foundation()

  mainService.getIdeas().then(function(response) {
  console.table(response);
  $scope.ideas = response;
});
$scope.deleteIdeas = function(id) {
  console.log("I'm working!", id);
  mainService.deleteIdeas(id).then(function(response) {
    $window.location.reload();

  });
};

// $scope.queryEdit = function() {
// mainService.getIdea($stateParams.id).then(function(response) {
//   console.log(response[0]);
//
//   console.log('hello')
//   $scope.editIdea = response[0];
// });
// };

});
