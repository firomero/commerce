export default class LoginController {
	constructor(_path, UserService) {
		'ngInject';
		this.UserService = UserService;
	}

	$onInit = () => {
		this.heading = 'Welcome to AngularJS ES6 Starter-Kit';
		this.model = {
			userName: 'Juan Pablos Rojas'
		};
	};

	getWizardStep = () => {
  
		return 1;
	}

	becomeClient = () => {

	}
}
