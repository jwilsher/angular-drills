angular.module('apiApp').controller('myCtrl', function($scope, myService){
    //make sure to pass in the Service!!!
    
    //the below function is what we want to call when we click the button
    $scope.getPokemonName = function(inputId) {
        
        //now we are going to call the function that we wrote in our Service called getData
        
        myService.getData(inputId).then(function(pokemanNameResponse) {
            //the "pokemonNameResponse" is what we got back from the ".then" that was called in the service
            console.log(pokemanNameResponse);
            $scope.theName = pokemanNameResponse;
        });
    };
    
});