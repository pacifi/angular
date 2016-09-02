
angular.module("MyFirsthApp", []).
controller("FirstController", ["$scope", "$http", function(s, h){

    s.posts = [];
    s.newPost = {};

// aca podemos usar post, get, delete, patch
    h.get("https://jsonplaceholder.typicode.com/posts")
        .success(function (data) { //Promise sirve para manejar peticiones asincronicas que hace ajax (este retorna un succes y error)

            s.posts = data;
        })
        .error(function (errr) {
            console.log(error);
        });
    
    s.addPost = function () {
        h.post("https://jsonplaceholder.typicode.com/posts",
            {
                title: s.newPost.title,
                body: s.newPost.body,
                userId: 1
            })
            .success(function (data, status, headers, config) {
                s.posts.push(s.newPost);
                s.newPost = {};

            })
            .error(function (errr, status, headers, config) {
                console.log(error);
            })
    }
    

}]);