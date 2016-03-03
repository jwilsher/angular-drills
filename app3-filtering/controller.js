angular.module('app3').controller('myCtrl', function($scope, myService) {
    
    $scope.list = myService.getData();
});