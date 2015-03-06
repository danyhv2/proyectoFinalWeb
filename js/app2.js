(function () {

	var grupos = angular.module('grupos', ['ngMaterial', 'ngMessages', 'ui.bootstrap.demo', 'ui.router', 'ngAnimate']);
	grupos.controller('gruposController', function ($scope, $http) {
		/*$http.get('scripts/estudiantes.json').success(function(data){
				$scope.estudiantes2 = data;
			});*/
		$scope.estudiantes = [
			{
				name: 'Roy Solera Quiros2'
			},
			{
				name: 'Roy Solera Quiros'
			}
			];
		$scope.grupos = [

			];
		$temporales = [];
		$scope.muchos = [];
		$scope.zoomImg = function (imagen) {
			$scope.imagenSeleccionado = imagen;
		};

		$scope.ordenar = function (orden) {
			$scope.ordenSeleccionado = orden;
		};
		$scope.addEstudiante = function () {
			$scope.muchos.push({
				nombre: $scope.nuevoEstudiante.name
			});
			$scope.temporales.push({
				nombre: $scope.nuevoEstudiante.name
			});
			$scope.nuevoEstudiante = '';
			console.log($scope.muchos);
			//$scope.formVisibility=false;
		};

		$scope.addGrupo = function () {
			$scope.grupos.push({
				name: $scope.nuevoName,
				estudiantes: $scope.muchos
			});
			$scope.nuevoName = '';
			$scope.nuevoEstudiante = '';
			$scope.muchos = [];
			//$scope.formVisibility=false;
		};
		$scope.removeGrupo = function (grupo) {
			var i = $scope.grupos.indexOf(grupo);
			$scope.grupos.splice(i, 1);
		};
		$scope.removeGrupo2 = function (grupo) {
			var i = $scope.muchos.indexOf(grupo);
			$scope.muchos.splice(i, 1);
		};
		$scope.mostrarGrupo = function (grupo) {
			var i = $scope.grupos.indexOf(grupo);
			var myGrupo = $scope.grupos[i];
			console.log(myGrupo);
			return i;
		};


		//$scope.formVisibility=false;
		//$scope.ocultar=function(){
		//$scope.formVisibility=true;
		//};
	});
	grupos.config(function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/usuario');

		$stateProvider
			.state('perfil', {
				url: '/perfil',
				templateUrl: 'pages/_perfil.html',
				controller: 'PerfilCtrl'
			})
		// HOME STATES AND NESTED VIEWS ========================================  
		.state('crearGrupo', {
			url: '/crear-grupo',
			templateUrl: 'views/_ingresarGrupo.html',
			controller: 'gruposController'
		})
			.state('rubricas', {
				url: '/rubricas',
				template: 'Trabajando en ello',
				controller: 'gruposController'
			})



		// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================

	});

})();