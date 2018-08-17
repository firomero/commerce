export default class MessageConfirmController {

	constructor($timeout, $uibModalInstance, message, textAction) {
		'ngInject';
		this.$timeout = $timeout;
		this.$uibModalInstance = $uibModalInstance;
		this.message = message;
		this.textAction = textAction;
	}

	$onInit = () => {};
	
	cancel() { this.$uibModalInstance.close(); }
	confirm() { this.$uibModalInstance.close({'success': true}); }
	confirmSecundary() { this.$uibModalInstance.close({'success': true, action: 'secundary'}); }
}
