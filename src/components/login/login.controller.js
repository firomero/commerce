export default class LoginController {

	saving = false;

	constructor($timeout, $location, $uibModal, WizardHandler, UserService, CompanyService) {
		'ngInject';
		this.$timeout = $timeout;
		this.$location = $location;
		this.$uibModal = $uibModal;
		this.WizardHandler = WizardHandler;
		this.UserService = UserService;
		this.CompanyService = CompanyService;		
	}

	$onInit = () => {

		this.model = this.UserService.login();
		this.companies = this.CompanyService.getCompanies();
	};

	setLoadingStep() {

		var _this = this;
		_this.saving = true;
		_this.$timeout(1000).then(function() {

			_this.saving = false;
			_this.WizardHandler.wizard().next();		
		});
	}

	forgotPassword() {

		var _this = this;
		var modalInstance = this.$uibModal.open({
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			template: require('../modals/forgot/forgot.jade')(),
			controller: 'ForgotController',
			controllerAs: '$ctrl',
			size: 'lg',
			windowClass: 'fullscreen'
		});
	  
		modalInstance.result.then(function (response) {
			
			if (response.success) {
				_this.WizardHandler.wizard().reset();
				_this.reset();
			}
		});
	}

	finishedWizard() {
		localStorage.setItem('userLogin', JSON.stringify(this.model));
		localStorage.removeItem('user');
		this.$location.path('/dashboard')
	}

	reset() {

		var _this = this;
		_this.$onInit();
		_this.saving = false;
	}
}
