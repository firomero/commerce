export default class LoginController {

	saving = false;

	constructor($timeout, $uibModal, WizardHandler, UserService, CompanyService) {
		'ngInject';
		this.$timeout = $timeout;
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

	forgot() {

		var modalInstance = this.$uibModal.open({
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			template: require('../modals/forgot/forgot.jade')(),
			controller: 'ForgotController',
			controllerAs: '$ctrl',
			size: 'lg'
		});
	  
		modalInstance.result.then(function (selectedItem) {
			alert('Modal close');
		}, function () {
			alert('Modal dismissed at: ' + new Date());
		});
	}
}
