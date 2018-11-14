export default function LoginController($scope, $timeout, $location, $uibModal, WizardHandler, UserService, CompanyService, $state) {
	'ngInject';

	$scope.saving = false;
	$scope.showRut = 0;
	$scope.setLoadingStep = setLoadingStep;
	$scope.forgotPassword = forgotPassword;
	$scope.finishedWizard = finishedWizard;
	$scope.siiPayment = siiPayment;
	$scope.reset = reset;
	activate();

	function activate() {

		$scope.object = {};
		$scope.model = UserService.login();
		$scope.companies = CompanyService.getCompanies();
	}

	function setLoadingStep() {

		$scope.saving = true;
		$timeout(1000).then(function() {

			$scope.saving = false;
			WizardHandler.wizard().next();
			$scope.showRut++;
		});
	}

	function forgotPassword() {

		var modalInstance = $uibModal.open({
			animation: false,
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
		$scope.model.currentCompany = $scope.object.currentCompany;
		localStorage.setItem('userLogin', JSON.stringify($scope.model));
		localStorage.removeItem('user');
		$location.path('/dashboard');
	}

	function reset() {

		activate();
		$scope.saving = false;
		$scope.showRut = 0;
	}

	 function siiPayment() {

		var modalInstance = $uibModal.open({
			animation: false,
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			template: require('../view/sii-modal.jade')(),
			controller: 'SIIModalController',
			controllerAs: '$ctrl',
			size: 'lg',
			windowClass: 'fullscreen'
		});

		modalInstance.result.then(function (response) {
			if (response === 'transfer') {
				$state.go('app.transfer', {id: 'resumen'});
			} else{
				siiPayment();
			}
		});
	}
}
