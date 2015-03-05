var app = angular.module("module", ['ngResource','ngRoute']);
 
app.controller("documentosController", function ($scope, $http, dataResource,$rootScope) {
    $http.get('../data/documento.json').success(function (data) {
        $scope.documentosTotales = data;
    });
    $scope.datosResource = dataResource.get();
     
     $scope.visualizarDoc = function(index,event){
        $http.get('../data/documento.json').success(function(data) {
        $scope.documentosmostrar = data;

            window.open($scope.documentosmostrar[index].documento)
            event.preventDefault();
            console.log(data)
        });

    };

});
app.factory("dataResource", function ($resource) {
    return $resource("../data/documento.json", 
        { get: { method: "GET", isArray: true }
    })
});
