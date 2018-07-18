export default class MessageConfirmController {

	constructor($timeout, $uibModalInstance, message) {
		'ngInject';
		this.$timeout = $timeout;
		this.$uibModalInstance = $uibModalInstance;
		this.message = message;
	}

	$onInit = () => {};
	
	cancel() { this.$uibModalInstance.close(); }
	confirm() { this.$uibModalInstance.close({'success': true}); }
}
