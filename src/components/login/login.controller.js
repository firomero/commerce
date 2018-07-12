export default class LoginController {
	constructor(_path, UserService, CompanyService) {
		'ngInject';
		this.UserService = UserService;
		this.CompanyService = CompanyService;
	}

	$onInit = () => {

		this.model = this.UserService.login();
		this.companies = this.CompanyService.getCompanies();
	};

	getWizardStep = () => {
  
		return 1;
	}

	becomeClient = () => {

	}
}
