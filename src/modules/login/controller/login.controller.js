export default function LoginController($scope, $timeout, $location, $uibModal, WizardHandler, UserService, CompanyService) {
	'ngInject';

	$scope.saving = false;
	$scope.setLoadingStep = setLoadingStep;
	$scope.forgotPassword = forgotPassword;
	$scope.finishedWizard = finishedWizard;
	$scope.reset = reset;
	activate();

	function activate() {

		$scope.model = UserService.login();
		$scope.companies = CompanyService.getCompanies();
	}

	function setLoadingStep() {

		$scope.saving = true;
		$timeout(1000).then(function() {

			$scope.saving = false;
			WizardHandler.wizard().next();		
		});
	}

	function forgotPassword() {

		var modalInstance = $uibModal.open({
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			template: require('../view/forgot.jade')(),
			controller: 'ForgotController',
			controllerAs: '$ctrl',
			size: 'lg',
			windowClass: 'fullscreen'
		});
	  
		modalInstance.result.then(function (response) {
			
			if (response != undefined  && response.success) {
				WizardHandler.wizard().reset();
				$scope.reset();
			}
		});
	}

	function finishedWizard() {
		localStorage.setItem('userLogin', JSON.stringify($scope.model));
		localStorage.removeItem('user');
		$location.path('/dashboard');
	}

	function reset() {

		activate()
		$scope.saving = false;
	}
}
