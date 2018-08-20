export default function ForgotController($scope, $timeout, $uibModal, $uibModalInstance) {
	'ngInject';

	$scope.selectedStep = 0;
    $scope.stepProgress = 1;
	$scope.maxStep = 3;
	$scope.confirmationInfoEmail = false;
	$scope.stepData = [
		{ step: 1, completed: false, data: {} },
		{ step: 2, completed: false, data: {} },
		{ step: 3, completed: false, data: {} },
	];

	$scope.enableNextStep = enableNextStep;
	$scope.moveToPreviousStep = moveToPreviousStep;
	$scope.submitCurrentStep = submitCurrentStep;
	$scope.finish = finish;
	$scope.close = close;


	function enableNextStep() {
        if ($scope.selectedStep >= $scope.maxStep) {
            return;
        }
        if ($scope.selectedStep === $scope.stepProgress - 1) {
            $scope.stepProgress = $scope.stepProgress + 1;
		}
	
		$scope.stepData[$scope.selectedStep].completed = true;
		$scope.selectedStep = $scope.selectedStep + 1;
	}
	
	function moveToPreviousStep() {
        if ($scope.selectedStep > 0) {
			$scope.selectedStep = $scope.selectedStep - 1;
			$scope.stepData[$scope.selectedStep].completed = false;			
        }
	}
	
	function submitCurrentStep(stepData) {
		
		$timeout(function() {

			if ($scope.selectedStep == 1 && !$scope.confirmationInfoEmail) {

				$scope.confirmationInfoEmail = true;
				var message = "Estimado Marcelo tú clave de recuperación ha sido enviada exitosamente a tú correo jpr******@gmail.com"; 
				var confirmInstance = $uibModal.open({
					ariaDescribedBy: 'modal-body',
					template: require('../../common/components/message-confirm/message-confirm.jade')(),
					controller: 'MessageConfirmController',
					controllerAs: '$ctrl',
					size: 'lg',
					backdrop: false,
					keyboard  : false,
					resolve: {
						message: () => message,
						textAction: () => undefined
					},
					windowClass: 'bottom-confirm'
				});
			  
				confirmInstance.result.then(function (response) {

					if (response != undefined  && response.success) {
						$scope.enableNextStep();
					}
				});
			} else {

				$scope.enableNextStep();
			}
		}, 500);
	}

	function close() {
		
		$uibModalInstance.close();
	}
	
	function finish() {
		
		var message = "Estimado Marcelo tú clave fue modificada exitosamente"; 
		var confirmInstance = $uibModal.open({
			ariaDescribedBy: 'modal-body',
			template: require('../../common/components/message-confirm/message-confirm.jade')(),
			controller: 'MessageConfirmController',
			controllerAs: '$ctrl',
			size: 'lg',
			backdrop: false,
			keyboard  : false,			
			resolve: {
				message: () => message,
				textAction: () => undefined
			},
			windowClass: 'bottom-confirm finish'
		});
	  
		confirmInstance.result.then(function (response) {

			if (response != undefined  && response.success) {
				$uibModalInstance.close({success: true});
			}
		});
		
	}
}
