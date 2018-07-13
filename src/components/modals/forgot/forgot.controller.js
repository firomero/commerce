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

		this.asdas = 'asdasdasdasd';
		this.stepData = [
			{ step: 1, completed: false, active: false, optional: false, data: {} },
			{ step: 2, completed: false, active: false, optional: false, data: {} },
			{ step: 3, completed: false, active: false, optional: false, data: {} },
		];
	};

	enableNextStep() {
        //do not exceed into max step
        if (this.selectedStep >= this.maxStep) {
            return;
        }
        //do not increment vm.stepProgress when submitting from previously completed step
        if (this.selectedStep === this.stepProgress - 1) {
            this.stepProgress = this.stepProgress + 1;
		}
		if (this.selectedStep == 0) {
			this.stepData[this.selectedStep].active = true;
		}
		this.selectedStep = this.selectedStep + 1;
		if (this.selectedStep < this.maxStep) {
			this.stepData[this.selectedStep].active = true;
		}
	}
	
	moveToPreviousStep() {
        if (this.selectedStep > 0) {
			debugger
			this.stepData[this.selectedStep].active = false;
			this.stepData[this.selectedStep].completed = false;
			if (this.selectedStep - 1 == 0) {
				this.stepData[this.selectedStep - 1].active = false;
			}
			this.selectedStep = this.selectedStep - 1;
        }
	}
	
	submitCurrentStep(stepData) {
		
        if (!stepData.completed) {

			var _this = this;
            _this.$timeout(500).then(function() {
                _this.showBusyText = false;
                stepData.completed = true;
                _this.enableNextStep();
            });
        } else {
            this.showBusyText = false;
            this.enableNextStep();
        }
	}
	
	close() {

		this.$uibModalInstance.close();
	}
}
