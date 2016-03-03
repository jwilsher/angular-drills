angular.module('apiApp').service('myService', function($http){
    
    //make sure to pass in $http!!!!
    
    var baseUrl = "http://pokeapi.co/api/v2/pokemon/";
    
    this.getData = function(pokeId) {
        return $http ({
            method: 'GET',
            url: baseUrl + pokeId
        }).then(function(response) {
            console.log(response); //this helps you figure out in what format the API gives you information
            return response.data.name;
        })
    };
    
});