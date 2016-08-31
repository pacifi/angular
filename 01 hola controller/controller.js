var app = angular.module("MyFirsthApp", []);  // cuando creamos el modulo este debe de estar definido en ng-app
                                    // [] es el segundo paramento que es para decir que modulos vamos a utilozar y es
                                    //la senentcia me retorna un referencia es por eso que se puede usar controller.

app.controller("FirstController", function($scope){
    $scope.nombre = "Bonnier Nilss";
});