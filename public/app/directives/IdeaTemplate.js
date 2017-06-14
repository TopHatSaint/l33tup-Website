// INITILIZE DIRECTIVE
// ============================================================
angular.module("app").directive('ideaDir', function() {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/dirViews/ideaTmpl.html',
    controller: 'homeCtrl',
    link: function(scope, element, att) {

    },
    scope: {
      idea: "="
    }
  };
});
