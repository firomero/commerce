export default class MessageConfirmController {

	constructor($timeout, $uibModalInstance, message, textPrimaryAction, textAction) {
		'ngInject';
		this.$timeout = $timeout;
		this.$uibModalInstance = $uibModalInstance;
		this.message = message;
		this.textPrimaryAction = textPrimaryAction == undefined ? 'ACEPTAR' : textPrimaryAction;
		this.textAction = textAction;
	}

	$onInit = () => {};

	cancel() { this.$uibModalInstance.dismiss(); }
	confirm() { this.$uibModalInstance.close({'success': true}); }
	confirmSecundary() { this.$uibModalInstance.close({'success': true, action: 'secundary'}); }
}
