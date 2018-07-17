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
		image: 'images/carousel/login-background.png',
		text: 'Hola Marcelo',
		text1: 'Servicio de leasing',
		text2: 'Tu mejor alternativa de Financiamiento',
		id: this.currIndex++
	  },{
		image: 'images/carousel/creditcard-advance-background.jpg',
		text: 'Hola Marcelo',
		text1: 'Servicio de leasing',
		text2: 'Tu mejor alternativa de Financiamiento',
		id: this.currIndex++
	}]; 

	rating = {
		transferencias: {
			value: 30,
			options: {
				min: 0,
				max: 37,
				size: 100,
				barColor: '#94BB20',
				trackColor: '#EAEAEA',
				trackWidth: 1,
				barWidth: 8,
				readOnly: true,
				unit: ' / ' + 37,
				subText: {
					enabled: true,
					text: 'Solicitudes Pendientes'
				}
			}
		},
		solicitudes: [{
			value: 237,
			options: {
				min: 0,
				max: 300,
				size: 100,
				barColor: '#94BB20',
				trackColor: '#EAEAEA',
				trackWidth: 1,
				barWidth: 8,
				readOnly: true,
				unit: ' / ' + 300,
				subText: {
					enabled: true,
					text: 'Ingresadas'
				}
			}
		},{
			value: 30,
			options: {
				min: 0,
				max: 37,
				size: 100,
				barColor: '#94BB20',
				trackColor: '#EAEAEA',
				trackWidth: 1,
				barWidth: 8,
				readOnly: true,
				unit: ' / ' + 37,
				subText: {
					enabled: true,
					text: 'Visadas'
				}
			}
		},{
			value: 10,
			options: {
				min: 0,
				max: 21,
				size: 100,
				barColor: '#94BB20',
				trackColor: '#EAEAEA',
				trackWidth: 1,
				barWidth: 8,
				readOnly: true,
				unit: ' / ' + 21,
				subText: {
					enabled: true,
					text: 'Autorizadas'
				}
			}
		},{
			value: 50,
			options: {
				min: 0,
				max: 78,
				size: 100,
				barColor: '#94BB20',
				trackColor: '#EAEAEA',
				trackWidth: 1,
				barWidth: 8,
				readOnly: true,
				unit: ' / ' + 78,
				subText: {
					enabled: true,
					text: 'Liberadas'
				}
			}
		}],
		destinatarios: {
			value: 4,
			options: {
				min: 0,
				max: 6,
				size: 100,
				barColor: '#94BB20',
				trackColor: '#EAEAEA',
				trackWidth: 1,
				barWidth: 8,
				readOnly: true,
				unit: ' / ' + 6,
				subText: {
					enabled: true,
					text: 'Solicitudes Pendientes'
				}
			}
		},
		factoring: {
			value: 20,
			options: {
				min: 0,
				max: 25,
				size: 100,
				barColor: '#94BB20',
				trackColor: '#EAEAEA',
				trackWidth: 1,
				barWidth: 8,
				readOnly: true,
				subText: {
					enabled: true,
					text: 'días Pendientes'
				}
			}
		}
	};

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