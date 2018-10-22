export default function LoginController($scope, $timeout, $location, $uibModal, WizardHandler, UserService, CompanyService, $state) {
	'ngInject';

	$scope.saving = false;
	$scope.showRut = 0;
	$scope.setLoadingStep = setLoadingStep;
	$scope.forgotPassword = forgotPassword;
	$scope.finishedWizard = finishedWizard;
	$scope.siiPayment = siiPayment;
	$scope.reset = reset;
	activate();

	function activate() {

		$scope.object = {};
		$scope.model = UserService.login();
		$scope.companies = CompanyService.getCompanies();
	}

	function setLoadingStep() {

		$scope.saving = true;
		$timeout(1000).then(function() {

			$scope.saving = false;
			WizardHandler.wizard().next();
			$scope.showRut++;
		});
	}

	function forgotPassword() {

		var modalInstance = $uibModal.open({
			animation: false,
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			template: require('../view/forgot.jade')(),
			controller: 'ForgotController',
			controllerAs: '$ctrl',
			size: 'lg',
			windowClass: 'fullscreen'
		});
	  
		modalInstance.result.then(function (response) {
			
			if (response != undefined  && response.success) {
				WizardHandler.wizard().reset();
				$scope.reset();
			}
		});
	}
	

	function finishedWizard() {
		$scope.model.currentCompany = $scope.object.currentCompany;
		localStorage.setItem('userLogin', JSON.stringify($scope.model));
		localStorage.removeItem('user');
		$location.path('/dashboard');
	}

	function reset() {

		activate()
		$scope.saving = false;
		$scope.showRut = 0;
	}

	 function siiPayment() {

		var modalInstance = $uibModal.open({
			animation: false,
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			template: require('../view/sii-modal.jade')(),
			controller: 'SIIModalController',
			controllerAs: '$ctrl',
			size: 'lg',
			windowClass: 'fullscreen'
		});
	  
		modalInstance.result.then(function (response) {
			let message = "Estimado Se ha ingresado su pago de Pago1, Puede revisarlo en su Inbox de Solicitudes de transferencia.";
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
					textAction: () => 'IR A TRANSFERENCIAS'
				},
				windowClass: 'bottom-confirm finish'
			});
			$scope.model.currentCompany = $scope.companies.filter((c) => {
				return c.nameID === response.enterprise.nameID;
			})[0];

			confirmInstance.result.then((response) =>
			{
				$timeout(() => {
					if (response.action === 'secundary')
					{
						localStorage.setItem('userLogin', JSON.stringify($scope.model));
						$state.go('app.transfer', {id: 'resumen'});
					}
					else {
						confirm();
					}
				})
			});
		});
	}

	function confirm() {
		let message = "TOAST de Flujo realizado con Exito, se debe considerar uno para, Exito de transferencias , Autorizaciones, Visados, Creación de Usuarios, Reglas ,Etc";
		let confirmInstance = $uibModal.open({
			ariaDescribedBy: 'modal-body',
			template: require('../../common/components/message-confirm/message-confirm.jade')(),
			controller: 'MessageConfirmController',
			controllerAs: '$ctrl',
			size: 'lg',
			backdrop: 'static',
			keyboard  : false,
			resolve: {
				message: () => message,
				textPrimaryAction: () => undefined,
				textAction: () => undefined
			},
			windowClass: 'bottom-confirm finish'
		});
		confirmInstance.result.then((rs) => {
			siiPayment();
		});
	}
}
