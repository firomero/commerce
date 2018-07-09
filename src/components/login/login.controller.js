export default class LoginController {
	constructor(_path, UserService) {
		'ngInject';
		console.log(_path);
		this.UserService = UserService;
	}

	$onInit = () => {
		this.heading = 'Welcome to AngularJS ES6 Starter-Kit';
		alert(this.UserService.login());
	};

	getWizardStep = () => {
  
		return 1;
	}

	becomeClient = () => {

	}
}
