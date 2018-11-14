export default function FirmDetailController($scope, $timeout, $uibModal, $uibModalInstance, firms, currentCompany) {
	'ngInject';

	$scope.firms = firms;
	$scope.currentCompany = currentCompany;
	$scope.close = close;
	$scope.success = success;

	function close() {
		
		$uibModalInstance.close();
	}

	function success() {

		var message = "Estimado JUAN PABLO se ha enviado un recordatorio a su mail jpr***@gmal.com."; 
		var confirmInstance = $uibModal.open({
			ariaDescribedBy: 'modal-body',
			template: require('../../../components/message-confirm/message-confirm.jade')(),
			controller: 'MessageConfirmController',
			controllerAs: '$ctrl',
			size: 'lg',
			backdrop: false,
			keyboard  : false,			
			resolve: {
				message: () => message,
				textPrimaryAction: () => undefined,
				textAction: () => undefined
			},
			windowClass: 'bottom-confirm finish'
		});

		confirmInstance.result.then(function (response) {
			
			if (response != undefined  && response.success) {
				$scope.close();
			}
		});
	}
}