export default class ForgotController {

	selectedStep = 0;
    stepProgress = 1;
	maxStep = 3;
	confirmationInfoEmail = false;

	constructor($timeout, $uibModal, $uibModalInstance) {
		'ngInject';
		this.$timeout = $timeout;
		this.$uibModal = $uibModal;
		this.$uibModalInstance = $uibModalInstance;
	}

	$onInit = () => {

		this.stepData = [
			{ step: 1, completed: false, data: {password: '10.456.789-0'} },
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

			if (_this.selectedStep == 1 && !_this.confirmationInfoEmail) {

				_this.confirmationInfoEmail = true;
				var message = "Estimado Marcelo tú clave de recuperación ha sido enviada exitosamente a tú correo jpr******@gmail.com"; 
				var confirmInstance = _this.$uibModal.open({
					ariaDescribedBy: 'modal-body',
					template: require('../../../core/components/message-confirm/message-confirm.jade')(),
					controller: 'MessageConfirmController',
					controllerAs: '$ctrl',
					size: 'lg',
					backdrop: false,
					keyboard  : false,
					resolve: {
						message: () => message
					},
					windowClass: 'bottom-confirm'
				});
			  
				confirmInstance.result.then(function (response) {

					if (response != undefined  && response.success) {
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
		
		var _this = this;
		var message = "Estimado Marcelo tú clave fue modificada exitosamente"; 
		var confirmInstance = this.$uibModal.open({
			ariaDescribedBy: 'modal-body',
			template: require('../../../core/components/message-confirm/message-confirm.jade')(),
			controller: 'MessageConfirmController',
			controllerAs: '$ctrl',
			size: 'lg',
			backdrop: false,
			keyboard  : false,			
			resolve: {
				message: () => message
			},
			windowClass: 'bottom-confirm finish'
		});
	  
		confirmInstance.result.then(function (response) {

			if (response != undefined  && response.success) {
				_this.$uibModalInstance.close({success: true});
			}
		});
		
	}
}
