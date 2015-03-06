var app = angular.module('CoreApp', ['ngRoute', 'ngAnimate']);

//Configuración de enrutamiento
app.config(['$routeProvider', '$locationProvider',
	function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'pages/home.html',
			})
			.when('/perfil', {
				templateUrl: 'pages/_perfil.html',
				controller: 'PerfilCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
		$locationProvider.html5Mode(true);
}]);
//Directivas
app.directive('slideshow', [

	function () {
		return {
			restrict: 'E',
			templateUrl: 'views/_carousel.html',
			controller: 'slideshowCtrl'
		}
}]);
app.controller('slideshowCtrl', ['$scope',
	function ($scope) {
		$scope.images = [
			{
				src: 'img/fb.png',
				alt: 'facebook'
	},
			{
				src: 'img/documentos1.png',
				alt: 'Documentos 1'
	}]
}])
app.directive('proyectoInfo', [

	function () {
		return {
			restrict: 'E',
			templateUrl: 'views/proyectoInfo.html',
			controller: 'ProyectoCtrl'
		};
}]);
app.directive('sliderProyectos', [

	function () {
		return {
			restrict: 'E',
			templateUrl: 'views/contenedorProyectos.html',
			controller: 'ProyectoCtrl'
		}
}]);
//Controladores
app.controller('ProyectoCtrl', ['$scope', 'ControlProyectos',
	function ($scope, ControlProyectos) {
		$scope.proyectos = ControlProyectos.obtenerTodos();
		$scope.enVotacion = true;
}])
//Servicios
app.factory('ControlProyectos', ['$http',
	function ($http) {
		return {
			obtenerTodos: function () {
				return proyectosData;
			}
		}
}]);

app.controller('PerfilCtrl', ['$scope', 'ControlDeUsuario',
	function ($scope, ControlDeUsuario) {
		$scope.modificar = false;
		$scope.setModificar = function () {
			if ($scope.modificar == true) {
				$scope.modificar = false;
			} else {
				$scope.modificar = true;
			}
		}
		$scope.usuario = usuarioData;
		$scope.actualizarDatos = function () {
			ControlDeUsuario.modificarPerfil($scope.foto, $scope.nombre, $scope.primerApellido, $scope.segundoApellido, $scope.correoElectronico, $scope.telefono, $scope.celular, $scope.descripcion, $scope.direccionExacta)
		}
}]);
app.factory('ControlDeUsuario', ['$http',
	function ($http) {
		return {
			iniciarSession: function (usuario, contrasena) {
				console.log("El usuario es %s con la contraseña %s", usuario, contrasena);
			},
			cerrarSession: function (usuario) {
				console.log("Estas cerrando sessión con %s", usuario);
			},
			modificarPerfil: function (foto, nombre, primerApellido, segundoApellido, correoElectronico, telefonoPrincipal, telefonoCecular, descripcion, direccionExacta) {
				console.log("Haz Cambiado %s, %s, %s, %s, %s, %s, %s, %s %s.", foto, nombre, primerApellido, segundoApellido, correoElectronico, telefonoPrincipal, telefonoCecular, descripcion, direccionExacta);
				usuarioData.foto = foto;
				usuarioData.nombre = nombre + ' ' + primerApellido + ' ' + segundoApellido;
				usuarioData.correoElectronico = correoElectronico;
				usuarioData.telefono = telefonoPrincipal;
				usuarioData.celular = telefonoCecular;
				usuarioData.descripcion = descripcion;
				usuarioData.direccionExacta = direccionExacta;
			}
		};
}]);

var proyectosData = [{
		nombre: 'Dmg Coders',
		descripcion: 'WebApp para control de historial de proyecto ',
		leerMas: 'http: //google.com'
			}, {
		nombre: 'Dmg Sliders',
		descripcion: 'WebApp para control de historial de proyecto',
		leerMas: 'http://yahoo.com'
			},
	{
		nombre: 'Dmg Sliders',
		descripcion: 'WebApp para control de historial de proyecto',
		leerMas: 'http://yahoo.com'
			}];
var usuarioData = {
	foto: 'img/fb.png',
	carrera: 'Diseño y Desarrollo Web',
	nombre: 'Daniel Campos Arce',
	correoElectronico: 'dcamposa@ucenfotec.ac.cr',
	telefono: 22563450,
	celular: 89770980,
	descripcion: 'Amante logo de la programación',
	direccionExacta: 'San isidro de heredia'
};