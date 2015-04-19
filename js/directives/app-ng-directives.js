"use strict"; 

angular.module('thisApp.footer',[])
.directive('appFooter', function(){
  return {
    restrict: 'E',
    templateUrl: 'templates/footer.html'
  }
})

