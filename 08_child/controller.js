
app = angular.module("mainModule", []);

app
    .run(function ($rootScope) {
        $rootScope.nombre = "Bonnier Nilss";
    })
    //.controller("mainControl", function ($scope, $rootScope) {
    // podemos agregar rootScope por run o
    .controller("mainControl", function ($scope) {
    $scope.nombre = "Nuevo Nombre"

})
    .controller("HijoControl", function ($scope) {


    })
;