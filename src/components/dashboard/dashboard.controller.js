export default class DashboardController {

	currentCompany = { nameID: null, name: '', rol: '', accounts: [] };
	userCompanies = [];
	loadAccounts = false;
	tooglePrice = false;
	ROL_1 = 'APODERADO';
	ROL_2 = 'OPERADOR';

	constructor($timeout, $mdSidenav, UserService, MoneyChangeService) {
		'ngInject';
		this.$timeout = $timeout;
		this.$mdSidenav = $mdSidenav;
		this.UserService = UserService;
		this.MoneyChangeService = MoneyChangeService;
	}

	$onInit = () => {

		this.userLogin = this.UserService.userLogin();
		this.currentCompany.nameID = this.userLogin.currentCompany;
		this.userCompanies = this.userLogin.companies;
		this.moneyChange = this.MoneyChangeService.getMoneyChange();

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

	showPrice() {

		this.tooglePrice = !this.tooglePrice;
	}
}