/**
 * Created by pacifi on 9/1/16.
 */

angular.module("mainModule", [])
    .filter("removeHtml", function () {
       return function (text) {
           return String(text).replace(/<[^>]+>/gm, '');
       }
    })
    .controller("FiltersController", function ($scope) {
        $scope.mi_html = "<p>Hola Mundo </p>"

        $scope.dicio = {};
        $scope.dicio.nombre = "Bonnier";
        $scope.dicio.apellido = "Mamani";

        $scope.precio = 23.99;

    });
