// data binding es la sincronizacion que se da entre el modelo y la vista en caso de angular se hace por scope.
// en angular two databinding. quiere decir que la vista tambien puede modificar al modelo del controlodaro,

angular.module("MyFirsthApp", []).
controller("FirstController", ["$scope", function(s){
    s.nombre = "Bonnier Nilss";
    s.nuevoComentario = {};
    s.comentarios =[ {
            comentario: "Buen Ejemplo",
            username: "pacifi",
        },
        {
            comentario: "No pasa Nada",
            username: "carlos"
        },
        {
            comentario: "genial el tutorial",
            username: "wilson"
        }
    ];

    s.agregarComentario = function () {
        s.comentarios.push(s.nuevoComentario);
        s.nuevoComentario = {};
    }

}]);