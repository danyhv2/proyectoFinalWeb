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
            console.log(data)
        });

    };
    var timeoutHandle = window.setTimeout(function(){
        $("#message1").addClass('hide');

    });

    $(".errorArchivo").addClass('hide');

    
    $scope.guardarDocumento = function(){
        var descripcion = $scope.documento.descripcion,
        titulo = $scope.documento.titulo,
        grupo = $scope.documento.grupo,
        documentoNuevo = new Object(),
        fechaDocumento = new Date();

        documentoNuevo.titulo = titulo;
        documentoNuevo.grupo = grupo;
        documentoNuevo.descripcion = descripcion;
        documentoNuevo.fecha = fechaDocumento.getDate() + '/' + fechaDocumento.getMonth() + '/' + fechaDocumento.getFullYear();


        $scope.documentosTotales.push(documentoNuevo);
        
        $('#myModal').modal('hide');
        window.clearTimeout(timeoutHandle);

            $("#message1").removeClass('hide');
            timeoutHandle = window.setTimeout(function(){
                $("#message1").addClass('hide');
            }, 2000);

        console.log(documentoNuevo);


        $scope.documento.titulo = " ";
        $scope.documento.descripcion = " ";
        $scope.documento.tema = " ";
    };

    $scope.ver = 1;

});


app.factory("dataResource", function ($resource) {
    return $resource("../data/documento.json", 
        { get: { method: "GET", isArray: true }
    })
});
