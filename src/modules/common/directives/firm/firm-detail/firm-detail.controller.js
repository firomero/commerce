export default function FirmDetailController($scope, $timeout, $uibModal, $uibModalInstance) {
	'ngInject';

	$scope.close = close;

	function close() {
		
		$uibModalInstance.close();
	}
	
	// function finish() {
		
	// 	var message = "Estimado Marcelo tú clave fue modificada exitosamente"; 
	// 	var confirmInstance = $uibModal.open({
	// 		ariaDescribedBy: 'modal-body',
	// 		template: require('../../common/components/message-confirm/message-confirm.jade')(),
	// 		controller: 'MessageConfirmController',
	// 		controllerAs: '$ctrl',
	// 		size: 'lg',
	// 		backdrop: false,
	// 		keyboard  : false,			
	// 		resolve: {
	// 			message: () => message
	// 		},
	// 		windowClass: 'bottom-confirm finish'
	// 	});
	  
	// 	confirmInstance.result.then(function (response) {

	// 		if (response != undefined  && response.success) {
	// 			$uibModalInstance.close({success: true});
	// 		}
	// 	});
		
	// }
}
