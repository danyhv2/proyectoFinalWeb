var app = angular.module('CoreApp', ['ngRoute']);

//Configuración de enrutamiento
app.config(['$routeProvider', '$locationProvider',
	function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'pages/index_logIn.html',
				controller: 'MainCtrl'
			})
			.when('/perfil', {
				templateUrl: 'pages/perfil.html',
				controller: 'PerfilCtrl'
			})
			.when('/portafolio', {
				template: 'pages/portafolio.html',
				controller: 'PortafolioCtrl'
			});
}]);


//Controladores
app.controller('MainCtrl', ['$scope',
	function ($scope) {
		$scope.mensaje = 'Bienvenido al mundo de DMG Coders';
}])
app.controller('LoginCtrl', ['$scope',
	function ($scope) {
		console.log('Bienvenido %s', 'Daniel');
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
app.controller('PortafolioCtrl', ['$scope',
	function ($scope) {
		console.log('El portafolio aun esta en construcción.');
	}]);

///Directivas
app.directive('cabeceraLogout', [

	function () {
		return {
			restrict: 'E',
			templateUrl: 'partial-header.html',
			controller: 'LoginCtrl'
		};
}])
	.directive('piePaginaPrincipal', [

		function () {
			return {
				restrict: 'E',
				templateUrl: 'partial-footer.html'
			};
	}]);

//Servicios
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

var usuarioData = {
	foto: '#',
	nombre: 'Daniel Campos Arce',
	correoElectronico: 'dcamposa@ucenfotec.ac.cr',
	telefono: 22563450,
	celular: 89770980,
	descripcion: 'Amante logo de la programación',
	direccionExacta: 'San isidro de heredia'
};