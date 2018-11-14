export default class TransferAuthorizeController {

	constructor($timeout, $uibModalInstance, textPrimaryAction, textAction, count, amount, name) {
		'ngInject';
		this.$timeout = $timeout;
		this.$uibModalInstance = $uibModalInstance;
		this.textPrimaryAction = textPrimaryAction == undefined ? 'ACEPTAR' : textPrimaryAction;
		this.textAction = textAction;
		this.count = count;
		this.amount = amount;
		this.name = name;
	}

	$onInit = () => {};

	cancel() { this.$uibModalInstance.dismiss(); }
	confirm() { this.$uibModalInstance.close({'success': true, action: 'primary' }); }
	confirmSecundary() { this.$uibModalInstance.close({'success': true, action: 'secondary' }); }
}
