var app = angular.module('myApp', []);
app.controller('tableController', function($scope, $http) {
  $scope.words = [];
  $scope.contains = '';
  $scope.limit = 5;
  $scope.skip = 0;
  $scope.skipEnd = 0;
  //+ add sort and direction to scope
  $scope.sortFields = ['Word', 'First', 'Last', 'Length',
                       'Vowels', 'Consonants'];
  $scope.sortField ="Word";
  $scope.direction = "asc";

  $scope.getWords = function(){
    $http({url: 'http://localhost/words', method: "GET",
           params:{ limit:$scope.limit,
                    skip:$scope.skip,
                    //+ add sort field and direction to query parameters
                    sort:$scope.sortField,
                    direction:$scope.direction,
                    contains:$scope.contains }})
    .success(function(data, status, headers, config) {
        $scope.words = data;
        $scope.skipEnd = $scope.skip + $scope.words.length;
      })
     .error(function(data, status, headers, config) {
        $scope.words = [];
        $scope.skipEnd = $scope.skip + $scope.words.length;
      });
  };

  $scope.find = function(){
    $scope.skip = 0;
    $scope.getWords();
  };

  $scope.next = function(){
    if($scope.words.length === $scope.limit){
      $scope.skip += parseInt($scope.limit);
      $scope.getWords();
    }
  };

  $scope.prev = function(){
    if($scope.skip > 0){
      if($scope.skip >= parseInt($scope.limit)){
        $scope.skip -= parseInt($scope.limit);
      } else{
        $scope.skip = 0;
      }
      $scope.getWords();
    }
  };
});