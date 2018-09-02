export default class TransferAuthorizeController {

	constructor($timeout, $uibModalInstance, textPrimaryAction, textAction, count, amount) {
		'ngInject';
		this.$timeout = $timeout;
		this.$uibModalInstance = $uibModalInstance;
		this.textPrimaryAction = textPrimaryAction == undefined ? 'ACEPTAR' : textPrimaryAction;
		this.textAction = textAction;
		this.count = count;
		this.amount = amount;
	}

	$onInit = () => {};

	cancel() { this.$uibModalInstance.close(); }
	confirm() { this.$uibModalInstance.close({'success': true}); }
	confirmSecundary() { this.$uibModalInstance.close({'success': true, action: 'secundary'}); }
}
