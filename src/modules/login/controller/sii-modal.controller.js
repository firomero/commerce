export default function SIIModalController($scope, $timeout, $uibModal, $uibModalInstance, WizardHandler, UserService, $state) {
	'ngInject';

	$scope.saving = false;
	$scope.accountStorage =[];
	$scope.accounts =[];
	$scope.selectedStep = 1;
	$scope.stepData = [
		{step: 1, completed: false, data: {userType: {id: 1,name: 'APODERADO'}, copyFunction: 'NO'}},
        {step: 2, completed: false, data: {	}},
        {step: 3, completed: false, data: {}}
    ];
    $scope.enterprises =  [
        {
           name: 'Kimberly Clark Chile S.A',
           nameID: 'KIMBERLY',
           accounts: [
               {
                   number: getRandomArbitrary(1,1000000),
                   amount:  '$'+ getRandomArbitrary(1,1000000)
               },
               {
                   number: getRandomArbitrary(1,1000000),
                   amount:  '$'+ getRandomArbitrary(1,1000000)
               },
               {
                   number: getRandomArbitrary(1,1000000),
                   amount:  '$'+ getRandomArbitrary(1,1000000)
               }
           ]
        },
        {
           name: 'Transbank S.A',
           nameID: 'TRANSBANK',
           accounts: [
               {
                   number: getRandomArbitrary(1,1000000),
                   amount:  '$'+ getRandomArbitrary(1,1000000)
               },
               {
                   number: getRandomArbitrary(1,1000000),
                   amount:  '$'+ getRandomArbitrary(1,1000000)
               },
               {
                   number: getRandomArbitrary(1,1000000),
                   amount:  '$'+ getRandomArbitrary(1,1000000)
               }
           ]
        },
        {
           name: 'Coca-Cola de Chicle S.A',
           nameID: 'COCACOLA',
            accounts: [
               {
                   number: getRandomArbitrary(1,1000000),
                   amount: '$'+ getRandomArbitrary(1,1000000)
               },
               {
                   number: getRandomArbitrary(1,1000000),
                   amount:  '$'+ getRandomArbitrary(1,1000000)
               },
               {
                   number: getRandomArbitrary(1,1000000),
                   amount:  '$'+ getRandomArbitrary(1,1000000)
               }
           ]
        }
    ];

    $scope.selectedAccount = {};
    $scope.selectedEnterprise = {};
    $scope.model = UserService.login();

	$scope.done = done;
	$scope.close = close;

	$scope.setLoadingStep = setLoadingStep;
	$scope.stepAccount = stepAccount;
	$scope.stepAmount = stepAmount;

	activate();

	function activate  () {

    };

    function stepAccount (enterprise) {
        $scope.accounts = enterprise.accounts;
        $scope.selectedEnterprise = enterprise;

    }

    function stepAmount(account) {
        $scope.stepData[1].data.amount = account.amount;
    }

    function getRandomArbitrary  (min, max)  {
		return Math.random() * (max - min) + min;
	}

	function close() {

		$uibModalInstance.dismiss();
	}

	function done() {
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
		confirmInstance.result.then((response) =>
		{
			$timeout(() => {
				if (response.action === 'secundary')
				{
					$scope.model = UserService.login();
					$scope.model.currentCompany = $scope.enterprises.filter((c) => {
						return c.nameID === $scope.selectedEnterprise.nameID;
					})[0];
					$scope.model.currentCompany = $scope.model.currentCompany.nameID;
					localStorage.setItem('userLogin', JSON.stringify($scope.model));
					localStorage.removeItem('user');
					$uibModalInstance.close('transfer');
				}
				else {
					confirm();
				}
			})
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
			$uibModalInstance.close({enterprise: $scope.selectedEnterprise});
		});
	}


	function setLoadingStep() {

		$scope.saving = true;
		$timeout(function () {

			$scope.saving = false;
			$scope.stepData[$scope.selectedStep - 1 ].completed = true;
			$scope.selectedStep++;
			WizardHandler.wizard().next();
		}, 1000);
	}

}
