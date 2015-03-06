(function() {
    var module = angular.module('module', ['ui.router']);

    module.controller('directorController', function($scope) {
        this.datos = archivos;
        this.valorActual = [];
        $('.errormsj').hide();
        $('.errormsj').css({"width": "77%"});
        $scope.edit = function(valores) {

            var t = $scope.este.datos.RubricasCreadas.indexOf(valores);

            valorActual = valores;
            valorActual = valores;
            $scope.entrada1 = valorActual.NombreDeRubrica;
            $scope.entrada2 = valorActual.Asistencia;
            $scope.entrada3 = valorActual.Concepto;
            $scope.entrada4 = valorActual.Examen1;
            $scope.entrada5 = valorActual.Examen2;
            $scope.entrada6 = valorActual.Tareas;

            $scope.editCreat = function() {

                var nuevaRubricaEditada = {
                    "NombreDeRubrica": $scope.entrada1,
                    "Asistencia": $scope.entrada2,
                    "Concepto": $scope.entrada3,
                    "Examen1": $scope.entrada4,
                    "Examen2": $scope.entrada5,
                    "Tareas": $scope.entrada6
                };
                archivos.RubricasCreadas.push(nuevaRubricaEditada);
                $scope.este.datos.RubricasCreadas.splice(t, 1);
            }
        }

        $scope.add = function() {

            total = Number($scope.int1) + Number($scope.int2) + Number($scope.int3) + Number($scope.int4) + Number($scope.int5);
            if (total === 100) {
                var nuevaRubricaCreada = {
                    "NombreDeRubrica": $scope.newNombreRubrica,
                    "Asistencia": $scope.int1,
                    "Concepto": $scope.int2,
                    "Examen1": $scope.int3,
                    "Examen2": $scope.int4,
                    "Tareas": $scope.int5
                }
                archivos.RubricasCreadas.push(nuevaRubricaCreada);
                $('.errormsj').hide();
            }else{
                    $('.errormsj').show();
                }
        }
    });

    module.config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
        // ruta a los grupos
            .state('grupo', {
            url: '/grupo',
            templateUrl: 'pages/opcionesDirector.html'
        })

        .state('grupo.grupoCursos', {
            url: '/cursos',
            template: '<p>Pendiente</p>'
        })

        .state('grupo.nuevaRubrica', {
            url: '/rubrica',
            templateUrl: 'pages/nuevaRubricaDirector.html',
            controller: 'directorController'
        })

        .state('grupo.cursosCarreras', {
            url: '/carreras',
            template: '<p>Pendiente</p>'
        })
    });
})();

var archivos = {
    "RubricasCreadas": [{
        "NombreDeRubrica": "Rubrica 1",
        "Asistencia": "10",
        "Concepto": "10",
        "Examen1": "15",
        "Examen2": "25",
        "Tareas": "10"
    }, {
        "NombreDeRubrica": "Rubrica 2",
        "Asistencia": "10",
        "Concepto": "10",
        "Examen1": "15",
        "Examen2": "25",
        "Tareas": "10"
    }, {
        "NombreDeRubrica": "Rubrica 3",
        "Asistencia": "10",
        "Concepto": "10",
        "Examen1": "15",
        "Examen2": "25",
        "Tareas": "10"
    }],

    "ParamatrosRubrica": [{
        "parametro1": "Asistencia"
    }, {
        "parametro2": "Concepto"
    }, {
        "parametro3": "Examen1"
    }, {
        "parametro4": "Examen2"
    }, {
        "parametro5": "Tareas"
    }]

}