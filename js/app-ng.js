"use strict"; 

angular.module('thisApp',[
  'thisApp.footer',
  'ui.bootstrap.pagination',
  'angularjs-dropdown-multiselect'
  // 'thisApp.service'
])
.controller('appCtrl', ['$scope', function($scope){
  $scope.dataset = [];
  $scope.numItems = 170;
  $scope.pageSize = 20;
  $scope.currentPage = 1;
  $scope.projectsList = ['a', 'b', 'c', 'd', 'e'];
  $scope.projectsObjects = [];
  $scope.projectsSelected = [];

  $scope.updateProjectsHash = function(){
    $scope.projectsHash = [];
    for (var i = 0; i < $scope.projectsList.length; i++){
      var tempObj = {id : i+1, label : $scope.projectsList[i]};

      $scope.projectsHash.push(tempObj);
    };
  };
  $scope.updateProjectsHash();  

  // $scope.projectsHash = [
  //   {id: 1, label: 'a'},
  //   {id: 2, label: 'b'},
  //   {id: 3, label: 'c'}
  // ]; 


  $scope.projectDropDownSettings = {
                  enableSearch: true, 
                  showCheckAll: false,
                  scrollable: true
                };
  $scope.projectDropDownTextSettings = {
                  buttonDefaultText: "Select Project(s)",
                  searchPlaceholder: "Filter Projects"
                };

  $scope.makeNumbers = function(){    
    for (var i = 0; i < $scope.numItems; i++){     
      $scope.dataset[i] = {num: i+1, category: $scope.projectsList[Math.floor(Math.random()*5)]};    
    }  
  };
  $scope.makeNumbers();



}])
.filter('pageDisplayFilter', function(){
  return function(input, scope){
    var begin = (scope.currentPage-1) * scope.pageSize;
    var end = begin + scope.pageSize;
    // if (end > scope.displayList){
    //   end = scope.displayList;
    // };
    // console.log(begin, end);
    return input.slice(begin, end);
  };
})

