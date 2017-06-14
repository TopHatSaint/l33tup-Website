// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("createTable", function($scope, mainService, $http, $state, $stateParams) {
  // VARIABLES
  // ============================================================
  // $(document).foundation()
    // let data = {
    //   title : $scope.title,
    //   idea : $scope.idea
    // };
 console.log("hello", $scope.thought);
  // FUNCTIONS
  // ============================================================
  // ideaInfo.title = document.getElementbyid('Title').value;
  // ideaInfo.idea = document.getElementbyid('Idea').value;
 // $scope.testFunction = function() {
 //   console.log("I am Working!")
 // }
  $scope.createIdeas = function() {
    mainService.createIdeas($scope.thought)
   $state.go("home");
}

    });
