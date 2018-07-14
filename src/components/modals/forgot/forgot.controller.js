export default class ForgotController {

	selectedStep = 0;
    stepProgress = 1;
	maxStep = 3;
	confirmationInfo = false;

	constructor($timeout, $uibModal, $uibModalInstance) {
		'ngInject';
		this.$timeout = $timeout;
		this.$uibModal = $uibModal;
		this.$uibModalInstance = $uibModalInstance;
	}

	$onInit = () => {

		this.stepData = [
			{ step: 1, completed: false, data: {} },
			{ step: 2, completed: false, data: {} },
			{ step: 3, completed: false, data: {} },
		];
	};

	enableNextStep() {
        if (this.selectedStep >= this.maxStep) {
            return;
        }
        if (this.selectedStep === this.stepProgress - 1) {
            this.stepProgress = this.stepProgress + 1;
		}
	
		this.stepData[this.selectedStep].completed = true;
		this.selectedStep = this.selectedStep + 1;
	}
	
	moveToPreviousStep() {
        if (this.selectedStep > 0) {
			this.selectedStep = this.selectedStep - 1;
			this.stepData[this.selectedStep].completed = false;			
        }
	}
	
	submitCurrentStep(stepData) {
		
		var _this = this;
		_this.$timeout(function() {

			if (_this.selectedStep == 1 && !_this.confirmationInfo) {

				var confirmInstance = _this.$uibModal.open({
					ariaDescribedBy: 'modal-body',
					template: require('../../../core/components/message-confirm/message-confirm.jade')(),
					controller: 'MessageConfirmController',
					controllerAs: '$ctrl',
					size: 'lg',
					backdrop: false,
					resolve: {
						message: () => 'asdasdasdasd'
					},
					windowClass: 'bottom-confirm'
				});
			  
				confirmInstance.result.then(function (response) {

					if (response.success) {
						_this.confirmationInfo = true;
						_this.enableNextStep();
					}
				});
			} else {

				_this.enableNextStep();
			}
		}, 500);
	}
	
	close() {

		this.$uibModalInstance.close();
	}

	finish() {
		
		this.$uibModalInstance.close({success: true});
	}
}
