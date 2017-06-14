// INITILIZE SERVICE
// ============================================================
angular.module("app").service("mainService", function($http, $stateParams, $state) {
  // CRUD FUNCTIONS
  // ============================================================
  this.getIdeas = function() {
    return $http({
      method: 'GET',
      url: '/api/table'
    }).then(function(response) {
      return response.data
    });
  };
  this.getIdea = function(id) {
    // console.log("MainService", id)
    return $http({
      method: 'GET',
      url: '/api/table/find?id='+ id
    }).then(function(response) {
      console.table(response)
      return response.data
    });
  };
  this.joinIdeas = function(collection){
    return $http({
      method: 'GET',
      url: ''
    });
  }
  this.createIdeas = function(thought) {
    return $http.post('/api/table', thought);
  }
  this.editIdeas = function(id, editIdea) {
    return $http.put('/api/table/edit/'+ id, editIdea);
    // return $http({
    //   method: 'PUT',
    //   url: "/api/table/edit" + id,
    // }).then(function(response) {
    //   return response.data
    // });
  };
  this.deleteIdeas = function(id) {
    return $http({
      method: 'DELETE',
      url: '/api/table/' + id
    }).then(function(response) {
      console.log("make it back");
    });
  };
  // OTHER FUNCTIONS
  // ============================================================

});
