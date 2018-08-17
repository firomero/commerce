export default function TransferModalController($scope, $timeout, $uibModal, $uibModalInstance, WizardHandler, action, BankService) {
	'ngInject';

	var self = this;
	$scope.accounts = JSON.parse(localStorage.getItem('accounts'));
	$scope.banks = BankService.getBanks();
	$scope.saving = false;
	$scope.now = new Date();
	$scope.types = [{
			id: 1,
			name: 'Alto Monto'
		},{
			id: 2,
			name: 'Bajo Monto'
		}
	];
	$scope.pagos = [{
			id: 1,
			name: 'PAGO PROVEEDORES',
			text: 'Pago Proveedores'
		},{
			id: 2,
			name: 'PAGO REMUNERADOS',
			text: 'Pago Remunerados'
		},{
			id: 3,
			name: 'OTROS PAGOS',
			text: 'Otros Pagos'
		}
	];
	$scope.formas = [{
			id: 1,
			name: 'Cargo a la Cuenta Nº 7003456780000'
		},{
			id: 2,
			name: 'Cargo a la Cuenta Nº 7003456235659'
		},{
			id: 3,
			name: 'Cargo a la Cuenta Nº 7002332780000'
		}
	];
	$scope.ingresos = [{
			id: 1,
			name: 'DOCUMENTO EXCELL',
			name: 'Documento Excell'
		},{
			id: 2,
			name: 'DIGITACIÓN',
			text: 'en Digitación'
		}
	];
	$scope.destinatarios = [{
			id: 1,
			name: 'EMPRESA DE TRANSPORTES RURALES LIMITADA'
		},{
			id: 2,
			name: 'ADMINISTRADORA DE SUPERMERCADOS HIPER LIMITADA'
		},{
			id: 3,
			name: 'CINEMARK CHILE S.A'
		},{
			id: 4,
			name: 'BCI SEGUROS GENERALES S.A'
		},{
			id: 5,
			name: 'GRUPO COPESA S.A'
		},{
			id: 6,
			name: 'SERVICIOS INDS Y CIA LTDA'
		}
	];
	$scope.selectedStep = 1;
	$scope.stepData = [
		{ step: 1, completed: false, data: {addDestinatario: 'NO'} },
		{ step: 2, completed: false, data: {} }
	];
	$scope.userForm = {
		utilFactura: false
	};
	$scope.userList = [];
	self.action = action;
	switch (self.action) {
		case 'NOMINA': {
			$scope.optionTitle = 'Nomina';
			break;
		}
		case 'DESTINATARIO': {
			$scope.optionTitle = 'Destinatario';
			break;
		}
		default: {
			$scope.optionTitle = 'Nueva Transferencia';
			break;
		}
	}

	// $scope.enableNextStep = enableNextStep;
	// $scope.moveToPreviousStep = moveToPreviousStep;
	// $scope.submitCurrentStep = submitCurrentStep;
	// $scope.finish = finish;
	$scope.close = close;
	$scope.addUser = addUser;
	$scope.changeTitle = changeTitle;
	$scope.backStep = backStep;
	$scope.setLoadingStep = setLoadingStep;
	
	function close() {
		
		$uibModalInstance.close();
	}

	function addUser(user) {
		$scope.userList.push(user);
		$scope.userForm = {
			utilFactura: false,
			razon: '',
			rut: '',
			mail: '',
			forma: '',
			bank: '',
			account: '',
			monto: ''
		};

		var message = "Estimado Marcelo se ha ingresado un nuevo Usuario a la nomina"; 
		var confirmInstance = $uibModal.open({
			ariaDescribedBy: 'modal-body',
			template: require('../../common/components/message-confirm/message-confirm-two-action.jade')(),
			controller: 'MessageConfirmController',
			controllerAs: '$ctrl',
			size: 'lg',
			backdrop: false,
			keyboard  : false,
			resolve: {
				message: () => message,
				textAction: () => 'CREAR OTRO USUARIO'
			},
			windowClass: 'bottom-confirm'
		});
	  
		confirmInstance.result.then(function (response) {

			if (response != undefined  && response.success) {
				// $scope.enableNextStep();
			}
		});
	}
	
	function enableNextStep() {
        if ($scope.selectedStep >= $scope.maxStep) {
            return;
        }
        if ($scope.selectedStep === $scope.stepProgress - 1) {
            $scope.stepProgress = $scope.stepProgress + 1;
		}
	
		$scope.stepData[$scope.selectedStep].completed = true;
		$scope.selectedStep = $scope.selectedStep + 1;
	}
	
	function moveToPreviousStep() {
        if ($scope.selectedStep > 0) {
			$scope.selectedStep = $scope.selectedStep - 1;
			$scope.stepData[$scope.selectedStep].completed = false;			
        }
	}
	
	function submitCurrentStep(stepData) {
		
		$timeout(function() {

			if ($scope.selectedStep == 1 && !$scope.confirmationInfoEmail) {

				$scope.confirmationInfoEmail = true;
				var message = "Estimado Marcelo tú clave de recuperación ha sido enviada exitosamente a tú correo jpr******@gmail.com"; 
				var confirmInstance = $uibModal.open({
					ariaDescribedBy: 'modal-body',
					template: require('../../common/components/message-confirm/message-confirm.jade')(),
					controller: 'MessageConfirmController',
					controllerAs: '$ctrl',
					size: 'lg',
					backdrop: false,
					keyboard  : false,
					resolve: {
						message: () => message
					},
					windowClass: 'bottom-confirm'
				});
			  
				confirmInstance.result.then(function (response) {

					if (response != undefined  && response.success) {
						$scope.enableNextStep();
					}
				});
			} else {

				$scope.enableNextStep();
			}
		}, 500);
	}

	function finish() {
		
		var message = "Estimado Marcelo tú clave fue modificada exitosamente"; 
		var confirmInstance = $uibModal.open({
			ariaDescribedBy: 'modal-body',
			template: require('../../common/components/message-confirm/message-confirm.jade')(),
			controller: 'MessageConfirmController',
			controllerAs: '$ctrl',
			size: 'lg',
			backdrop: false,
			keyboard  : false,			
			resolve: {
				message: () => message
			},
			windowClass: 'bottom-confirm finish'
		});
	  
		confirmInstance.result.then(function (response) {

			if (response != undefined  && response.success) {
				$uibModalInstance.close({success: true});
			}
		});
		
	}

	function changeTitle() {

		switch (self.action) {
			case 'NOMINA': {
				$scope.optionTitle = 'Nomina';
				break;
			}
			case 'DESTINATARIO': {
				$scope.optionTitle = 'Destinatario';
				break;
			}
			default: {
				$scope.optionTitle = 'Nueva Transferencia';
				break;
			}
		}
	}

	function backStep() {
		$scope.stepData[0].completed = false;
	}
	function setLoadingStep() {
		
		$scope.saving = true;
		$timeout(1000).then(function() {
			
			$scope.saving = false;
			if ($scope.selectedStep == 1) {
				$scope.stepData[0].completed = true;
			}
			WizardHandler.wizard().next();
			// $scope.showRut++;
		});
	}
}
