export default function ProductModalController($scope, $uibModal, $uibModalInstance) {
	'ngInject';
	$scope.close = close;
	$scope.finish = finish;

	function close() {

		$uibModalInstance.dismiss();
	}

	function finish() {

		var message = "Estimado Marcelo, su solicitud fue enviada exitosamente. Un Ejecutivo (a) se contactará con Ud. dentro de 24 horas por el medio indicado.";
		var confirmInstance = $uibModal.open({
			ariaDescribedBy: 'modal-body',
			template: require('../../common/components/message-confirm/message-confirm.jade')(),
			controller: 'MessageConfirmController',
			controllerAs: '$ctrl',
			size: 'lg',
			backdrop: false,
			keyboard: false,
			resolve: {
				message: () => message,
				textPrimaryAction: () => undefined,
				textAction: () => undefined
			},
			windowClass: 'bottom-confirm finish'
		});


		confirmInstance.result.then(function (response) {

			if (response != undefined && response.success) {
				$uibModalInstance.close({success: true});
			}
		});

	}
}
