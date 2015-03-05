(function(){
var opcionesDirector = angular.module('opcionesDirector', ['ui.router']);

opcionesDirector.controller('directorController', function($scope){
  this.datos = archivos;
  this.valorActual = {};
 $scope.add = function(){

        total = Number($scope.int1) + Number($scope.int2) + Number($scope.int3) + Number($scope.int4) + Number($scope.int5);

        if (total === 5) {
          var nuevaRubricaCreada =  {
                    "NombreDeRubrica": $scope.newNombreRubrica,
                    "Asistencia": $scope.int1,
                    "Concepto": $scope.int2,
                    "Examen 1": $scope.int3,
                    "Examen 2": $scope.int4,
                    "Tareas": $scope.int5
                };

          archivos.RubricasCreadas.push(nuevaRubricaCreada);
        }
    }

     $scope.edit = function(valores){
      valorActual = valores;
      console.log(valorActual.NombreDeRubrica)
      //var modifiedString = valores.replace("NombreDeRubrica", "jo");
    }

});

opcionesDirector.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider        
      // ruta a los grupos
        .state('grupo', {
            url: '/grupo',
            templateUrl: 'views/opcionesDirector.html'
        })

        .state('grupo.grupoCursos', {
            url: '/cursos',
            template: '<p>Pendiente</p>'
        })

        .state('grupo.nuevaRubrica', {
            url: '/rubrica',
            templateUrl: 'views/nuevaRubricaDirector.html',
            controller : 'directorController'
        })

        .state('grupo.cursosCarreras', {
            url: '/carreras',
            template: '<p>Pendiente</p>'
        })
  });
})();

var archivos = 
{
     "RubricasCreadas": [
           {
                "NombreDeRubrica": "Rubrica 1",
                "Asistencia": "10",
                "Concepto": "10",
                "Examen 1": "15",
                "Examen 2": "25",
                "Tareas": "10"
            },
            {
                "NombreDeRubrica": "Rubrica 2",
                "Asistencia": "10",
                "Concepto": "10",
                "Examen 1": "15",
                "Examen 2": "25",
                "Tareas": "10"
            },
            {
                "NombreDeRubrica": "Rubrica 3",
                "Asistencia": "10",
                "Concepto": "10",
                "Examen 1": "15",
                "Examen 2": "25",
                "Tareas": "10"
            }
        ],

         "ParamatrosRubrica": [
            {
                "parametro1" : "Asistencia"
            },
            {
                "parametro2" : "Concepto"
            },
            {
                "parametro3" : "Examen 1"
            },
            {
                "parametro4" : "Examen 2"
            },
            {
                "parametro5" : "Tareas"
            }
        ]

}
