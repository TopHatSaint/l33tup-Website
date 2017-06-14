// INITILIZE DIRECTIVE
// ============================================================
angular.module("app").directive('navBar', function() {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/dirViews/navBar.html',
    controller: 'homeCtrl'
  };
});
