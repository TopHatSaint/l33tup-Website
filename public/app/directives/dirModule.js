// INITILIZE DIRECTIVE
// ============================================================
angular.module("app").directive('dirModule', function() {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/dirViews/dirModuleView.html',
    controller: 'createTable'
  };
});
