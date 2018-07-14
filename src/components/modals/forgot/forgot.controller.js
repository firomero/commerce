export default class ForgotController {

	selectedStep = 0;
    stepProgress = 1;
    maxStep = 3;

	constructor($timeout, $uibModalInstance) {
		'ngInject';
		this.$timeout = $timeout;
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
		_this.$timeout(500).then(function() {
			_this.enableNextStep();
		});
	}
	
	close() {

		this.$uibModalInstance.close();
	}
}
