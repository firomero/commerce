export default function DashboardController(userLogin, $scope, $timeout, $state, $uibModal, $mdSidenav, UserService) {
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
	$scope.products = [
		{
			name: 'Factoring',
			value: '$495.000.000',
			key: 'FACTORING'
		},
		{
			name: 'Leasing',
			value: '$500.000.000',
			key: 'LEASING'
		},
		{
			name: 'Boleta de Garantia',
			value: '$495.800.000',
			key: 'BOLETA'
		},
		{
			name: 'COMEX',
			value: '$952.325.000',
			key: 'COMEX'
		}
	];
	$scope.product = $scope.products[0];
	$scope.slides = [
		{
		image: 'images/carousel/login-background.png',
		text: 'Hola Marcelo',
		text1: 'Servicio de leasing',
		text2: 'Tu mejor alternativa de Financiamiento',
		id: $scope.currIndex++
	  },
		{
		image: 'images/carousel/creditcard-advance-background.jpg',
		text: 'Hola Marcelo',
		text1: 'Servicio de leasing',
		text2: 'Tu mejor alternativa de Financiamiento',
		id: $scope.currIndex++
	}
	];
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
	$scope.newUser = newUser;
	$scope.createRule = createRule;
	function newUser() {

		const modalInstance = $scope.$uibModal.open({
			animation: false,
			template: require('../../user/view/user-modal.jade')(),
			controller: 'UserModalController',
			controllerAs: '$ctrl',
			size: 'lg',
			windowClass: 'fullscreen'
		});

		modalInstance.result.then(() => {
			let message = "Estimado Juan Pablo El Apoderado Marcelo se ha creado correctamente, Se ha enviado un respaldo a tu correo jor****@gmail.com";
			let confirmInstance = $uibModal.open({
				ariaDescribedBy: 'modal-body',
				template: require('../../common/components/message-confirm/message-confirm-two-action.jade')(),
				controller: 'MessageConfirmController',
				controllerAs: '$ctrl',
				size: 'lg',
				backdrop: 'static',
				keyboard  : false,
				resolve: {
					message: () => message,
					textPrimaryAction: () => 'ACEPTAR',
					textAction: () => 'CREAR OTRO USUARIO'
				},
				windowClass: 'bottom-confirm finish'
			});
			confirmInstance.result.then((response) =>
			{
				$timeout(() => {
					if (response.action === 'secundary')
					{
						newUser();
					}
				},1000)
			});
		});
	}

	function createRule() {
		const rule = $scope.$uibModal.open({
			animation: false,
			template: require('../../user/view/regla-modal.jade')(),
			controller: 'ReglaModalController',
			size: 'lg',
			windowClass: 'fullscreen'
		});

		rule.result.then(()=>{
			let message = "Estimado Marcelo, se ha ingresado una Nueva Regla al Sistema.";
			let confirmInstance = $uibModal.open({
				ariaDescribedBy: 'modal-body',
				template: require('../../common/components/message-confirm/message-confirm-two-action.jade')(),
				controller: 'MessageConfirmController',
				controllerAs: '$ctrl',
				size: 'lg',
				backdrop: 'static',
				keyboard  : false,
				resolve: {
					message: () => message,
					textPrimaryAction: () => 'ACEPTAR',
					textAction: () => 'CREAR OTRA REGLA'
				},
				windowClass: 'bottom-confirm finish'
			});

			confirmInstance.result.then((response) =>
			{
				$timeout(() => {
					if (response.action === 'secundary')
					{
						createRule();
					}
				})
			});
		})
	}

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
		$scope.product =  $scope.products.filter(function (v) {
			return v.key === product;
		})[0];
	}

	$scope.$on('company::change', function(data) {

		$scope.loadAccounts = true;
		$timeout(function(){
			$scope.currentCompany = data.targetScope.currentCompany;
			$scope.loadAccounts = false;
		}, 30);
	});
}
