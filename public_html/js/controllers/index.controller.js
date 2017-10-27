angular.module('App')
	.controller('IndexController', ['$scope',
		function ($scope) {
			$scope.disciplina = {};

			$scope.alunos = [];

			var _init = function () {
				$scope.disciplina.nome = 'Atividade Autoinstrucional - Inteligência Artificial';
				$scope.disciplina.professor = 'Professor: Luiz Cláudio Gomes Maia';

				$scope.alunos.push("Cassio Simoes");
				$scope.alunos.push("Vitor Iyomassa");
			};

			$scope.Init = _init;
		}]
	);