// CONFIG
// ============================================================
var app = angular.module("app", ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  // INITILIZE STATES
  // ============================================================
  $stateProvider
    // HOME STATE
    // .state('home', {
    //   url: '/home',
    //   templateUrl: './views/home.html',
    //   controller: 'homeCtrl'
    // })// ABOUT STATE
    .state('about', {
      url: '/about',
      templateUrl: './views/about.html',
      controller: 'aboutCtrl'
    })// HOME STATE
    .state('createTable', {
      url: '/createTable',
      templateUrl: './views/create.html',
      controller: 'createTable'
    })// tableDetail STATE
    .state('tableDetail', {
      url: '/tableDetail',
      templateUrl: './views/tableDetail.html',
      controller: 'tableDetailCtrl'
    })// EDITTING STATE
    .state('editIdea', {
      url: '/edit/:id',
      templateUrl: './views/editIdea.html',
      controller: 'editCtrl'
    })
    // new-home STATE
    .state('newHome', {
      url: '/newHome',
      templateUrl: './views/newHomeTmpl.html',
      controller: 'homeCtrl'
    });





  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/newHome');
});
