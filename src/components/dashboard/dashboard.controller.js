export default class DashboardController {

	currentCompany = { nameID: null, name: '', rol: '', accounts: [] };
	userCompanies = [];
	loadAccounts = false;
	ROL_1 = 'APODERADO';
	ROL_2 = 'OPERADOR';

	myInterval = 0;
	noWrapSlides = false;
	active = 0;
	currIndex = 0; 
	slides = [{
		image: 'assets/images/carousel/login-background.png',
		text: 'Hola Marcelo',
		text1: 'Servicio de leasing',
		text2: 'Tu mejor alternativa de Financiamiento',
		id: this.currIndex++
	  },{
		image: 'assets/images/carousel/creditcard-advance-background.jpg',
		text: 'Hola Marcelo',
		text1: 'Servicio de leasing',
		text2: 'Tu mejor alternativa de Financiamiento',
		id: this.currIndex++
	  }]; 

	constructor($timeout, $mdSidenav, UserService, MoneyChangeService) {
		'ngInject';
		this.$timeout = $timeout;
		this.$mdSidenav = $mdSidenav;
		this.UserService = UserService;
	}

	$onInit = () => {

		this.userLogin = this.UserService.userLogin();
		this.currentCompany.nameID = this.userLogin.currentCompany;
		this.userCompanies = this.userLogin.companies;

		for(var i = 0;i < this.userCompanies.length;i++) {

			if (this.userCompanies[i].nameID == this.currentCompany.nameID) {
				this.currentCompany.rol = this.userCompanies[i].rol;
				this.currentCompany.name = this.userCompanies[i].name;
				this.currentCompany.accounts = this.userCompanies[i].accounts;
				break;
			}
		}
	};

	selectCompany(company) {

		this.loadAccounts = true;
		this.currentCompany = company;
		this.loadAccounts = false;
	}

	openToggle() {

		this.$mdSidenav('right').toggle();
	}

	closeToggle() {
		
		this.$mdSidenav('right').close();
	}
}