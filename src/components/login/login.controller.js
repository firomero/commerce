export default class LoginController {

	saving = false;

	constructor(_path, $timeout, $q, WizardHandler, UserService, CompanyService) {
		'ngInject';
		this.$timeout = $timeout;
		this.$q = $q;
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
}
