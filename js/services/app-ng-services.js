"use strict"; 

angular.module('thisApp.services',[])
.factory('getAPIs', ['$http', function(){
  return function getAPI(url){
    return "hi"
  };
}])

