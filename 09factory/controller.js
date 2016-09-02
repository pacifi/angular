// data binding es la sincronizacion que se da entre el modelo y la vista en caso de angular se hace por scope.
// en angular two databinding. quiere decir que la vista tambien puede modificar al modelo del controlodaro,

angular.module("ToDoList", [
    "LocalStorageModule",
])
    .factory("ToDOService", function (localStorageService) {
        var toDoService = {};
        toDoService.key = "todo-list";

        toDoService.ac

        return toDoService;
    })
    .controller("TodoController", function($scope, localStorageService){

    if (localStorageService.get("todo-list")){
        $scope.todo = localStorageService.get("todo-list");
    }
    else {
        $scope.todo = [];
    }
    /*
        {
        descripcion: "terminar curso",
        fecha: "3-03-15 2:00pm,
        }

    */
    $scope.$watchCollection("todo", function (newValue, oldValue) {
        localStorageService.set("todo-list", $scope.todo);
    });

    $scope.addActv = function (){
        $scope.todo.push($scope.newActv);
        $scope.newActv = {};

    };

    //con function cambiar en button ng-click
    // $scope.clean = function () {
    //     $scope.todo = [];
    //
    // }

});