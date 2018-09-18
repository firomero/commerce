export default function DashboardController(userLogin, $scope, $timeout, $state, $mdSidenav, UserService) {
	'ngInject';

	$scope.currentCompany = { nameID: null, name: '', rol: '', accounts: [] };
	$scope.userCompanies = [];
	$scope.loadAccounts = false;
	$scope.ROL_1 = 'APODERADO';
	$scope.ROL_2 = 'OPERADOR';
	$scope.myInterval = 0;
	$scope.noWrapSlides = false;
	$scope.active = 0;
	$scope.currIndex = 0;
	$scope.slides = [{
		image: 'images/carousel/login-background.png',
		text: 'Hola Marcelo',
		text1: 'Servicio de leasing',
		text2: 'Tu mejor alternativa de Financiamiento',
		id: $scope.currIndex++
	  },{
		image: 'images/carousel/creditcard-advance-background.jpg',
		text: 'Hola Marcelo',
		text1: 'Servicio de leasing',
		text2: 'Tu mejor alternativa de Financiamiento',
		id: $scope.currIndex++
	}];

	$scope.rating = {
		transferencias: {
			value: 30,
			options: {
				min: 0,
				max: 37,
				size: 104,
				barColor: '#94BB20',
				trackColor: '#EAEAEA',
				trackWidth: 1,
				barWidth: 5,
				readOnly: true,
				unit: ' / ' + 37,
				subText: {
					enabled: true,
					text: 'Solicitudes Pendientes'
				}
			}
		},
		solicitudes: [{
			value: 237,
			options: {
				min: 0,
				max: 300,
				size: 104,
				barColor: '#94BB20',
				trackColor: '#EAEAEA',
				trackWidth: 1,
				barWidth: 5,
				readOnly: true,
				unit: ' / ' + 300,
				subText: {
					enabled: true,
					text: 'Ingresadas'
				}
			}
		},{
			value: 30,
			options: {
				min: 0,
				max: 37,
				size: 104,
				barColor: '#94BB20',
				trackColor: '#EAEAEA',
				trackWidth: 1,
				barWidth: 5,
				readOnly: true,
				unit: ' / ' + 37,
				subText: {
					enabled: true,
					text: 'Visadas'
				}
			}
		},{
			value: 10,
			options: {
				min: 0,
				max: 21,
				size: 104,
				barColor: '#94BB20',
				trackColor: '#EAEAEA',
				trackWidth: 1,
				barWidth: 5,
				readOnly: true,
				unit: ' / ' + 21,
				subText: {
					enabled: true,
					text: 'Autorizadas'
				}
			}
		},{
			value: 50,
			options: {
				min: 0,
				max: 78,
				size: 104,
				barColor: '#94BB20',
				trackColor: '#EAEAEA',
				trackWidth: 1,
				barWidth: 5,
				readOnly: true,
				unit: ' / ' + 78,
				subText: {
					enabled: true,
					text: 'Liberadas'
				}
			}
		}],
		destinatarios: {
			value: 4,
			options: {
				min: 0,
				max: 6,
				size: 104,
				barColor: '#94BB20',
				trackColor: '#EAEAEA',
				trackWidth: 1,
				barWidth: 5,
				readOnly: true,
				unit: ' / ' + 6,
				subText: {
					enabled: true,
					text: 'Solicitudes Pendientes'
				}
			}
		},
		factoring: {
			value: 20,
			options: {
				min: 0,
				max: 25,
				size: 104,
				barColor: '#94BB20',
				trackColor: '#EAEAEA',
				trackWidth: 1,
				barWidth: 5,
				readOnly: true,
				subText: {
					enabled: true,
					text: 'días Pendientes'
				}
			}
		}
	};

	$scope.selectProduct = selectProduct;
	$scope.goTo = goTo;
	activate();

	function activate() {

		$scope.currentCompany = { nameID: null, name: '', rol: '', accounts: [] };
		$scope.currentCompany.nameID = userLogin.currentCompany;
		$scope.userCompanies = userLogin.companies;
		for(var i = 0;i < $scope.userCompanies.length;i++) {

			if ($scope.userCompanies[i].nameID == $scope.currentCompany.nameID) {
				$scope.currentCompany.rol = $scope.userCompanies[i].rol;
				$scope.currentCompany.name = $scope.userCompanies[i].name;
				$scope.currentCompany.accounts = $scope.userCompanies[i].accounts;
				$scope.currentCompany.destinatario = $scope.userCompanies[i].destinatario;
				break;
			}
		}
	}

	function goTo(state) {

		switch(state) {
			case 'resumen': 
				$state.go('app.transfer', {id: 'resumen'})
				break;
			case 'destinatarios': 
				$state.go('app.transfer', {id: 'destinatarios'})
				break;
			default:
				break;
		}
	}

	function selectProduct(product) {

		console.log(product);
	}

	$scope.$on('company::change', function(data) {

		$scope.loadAccounts = true;
		$timeout(function(){
			$scope.currentCompany = data.targetScope.currentCompany;
			$scope.loadAccounts = false;
		}, 30);
	});
}
