export default function TransferController($scope, userLogin, $timeout, $uibModal, BankService) {
	'ngInject';

	var self = this;

	$scope.currentCompany = { nameID: null, name: '', rol: '', accounts: [] };
	$scope.loadAccounts = false;
	$scope.loadTabData = false;
	$scope.existAccounts = false;
	$scope.visibilityTabControl = 'ACCOUNT';
	$scope.selectedCheques = [];
	$scope.userLogin = userLogin;
	
	$scope.lastMovement = [];
	$scope.interes = [];
	$scope.historica = [];
	$scope.cheques = [];

	self.chequeMotivo = '';	
	self.motivos = [
		{text: 'Perdida o Extravio', label: 'PERDIDA O EXTRAVIO', id: 1},
		{text: 'Robo', label: 'ROBO', id: 2},
		{text: 'Hurto', label: 'HURTO', id: 3},		
		{text: 'Incumplimiento Comercial', label: 'INCUMPLIMIENTO COMERCIAL', id: 4},
		{text: 'Otros no especificados', label: 'OTROS NO ESPECIFICADOS', id: 5},
		{text: 'Alteración o falsificación', label: 'ALTERACIÓN O FALSIFICACIÓN', id: 6}
	];
	self.dateStart = '';
	self.dateEnd = '';
	self.avanzadControl = false;
	self.chequeBank = '';
	self.banks = BankService.getBanks();
	self.chequeAccount = '';
	self.accounts = [];
	self.cheques = [{
		id: 1,
		name: '123456789000000000'
	},{
		id: 2,
		name: '123456789001111000'
	}];
	self.chequeras = [{
		id: 1,
		name: '123456789034567'
	},{
		id: 2,
		name: '234567654324567'
	},{
		id: 3,
		name: '987656789342345'
	},{
		id: 4,
		name: '451239456709821'
	},{
		id: 5,
		name: '234567654312345'
	},{
		id: 6,
		name: '323456098765432'
	},{
		id: 7,
		name: '890765678943213'
	}];
	
	self.selectedDummyDataTransfer = false;
	$scope.dummyDataTransfer = [{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Alto Monto',
			origen: '32165498',
			destinatario: 'Empresa de Transportes Rurales Limitada',
			transferencia: '$400.000',
			firmas: [{
				name: 'Pablo Hernandez. A.',
				status: true
			},{
				name: 'Matias Contreras. B',
				status: true
			},{
				name: 'Maria Teresa Correa. R',
				status: false
			},{
				name: 'Marcela Acevedo. P',
				status: false
			}],
			estado: {
				icon: 'P',
				class: 'orage',
				text: 'Pendiente Autorización',
				nameKey: 'AUTORIZADO'
			}
		},{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Alto Monto',
			origen: '32165498',
			destinatario: 'Administradora de Supermercados Hiper Limitada',
			transferencia: '$400.000',
			firmas: [{
				name: 'Pablo Hernandez. A.',
				status: true
			},{
				name: 'Matias Contreras. B',
				status: true
			},{
				name: 'Maria Teresa Correa. R',
				status: true
			},{
				name: 'Marcela Acevedo. P',
				status: false
			}],
			estado: {
				icon: 'P',
				class: 'orage',
				text: 'Pendiente Autorización',
				nameKey: 'AUTORIZADO'
			}
		},{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Alto Monto',
			origen: '32165498',
			destinatario: 'Empresa de Transportes Rurales Limitada',
			transferencia: '$400.000',
			firmas: [{
				name: 'Pablo Hernandez. A.',
				status: false
			},{
				name: 'Matias Contreras. B',
				status: true
			},{
				name: 'Maria Teresa Correa. R',
				status: false
			},{
				name: 'Marcela Acevedo. P',
				status: false
			}],
			estado: {
				icon: 'P',
				class: 'orage',
				text: 'Pendiente Autorización',
				nameKey: 'AUTORIZADO'
			}
		},{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Pagos Masivos',
			origen: '32165498',
			destinatario: 'Administradora de Supermercados Hiper Limitada',
			transferencia: '$1.023.000',
			firmas: [{
				name: 'Pablo Hernandez. A.',
				status: true
			},{
				name: 'Matias Contreras. B',
				status: true
			},{
				name: 'Maria Teresa Correa. R',
				status: true
			},{
				name: 'Marcela Acevedo. P',
				status: false
			}],
			estado: {
				icon: 'P',
				class: 'orage',
				text: 'Pendiente Visado',
				nameKey: 'VISADO'
			}
		},{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Alto Monto',
			origen: '32165498',
			destinatario: 'Empresa de Transportes Rurales Limitada',
			transferencia: '$450.000',
			firmas: [{
				name: 'Pablo Hernandez. A.',
				status: true
			},{
				name: 'Matias Contreras. B',
				status: true
			},{
				name: 'Maria Teresa Correa. R',
				status: true
			},{
				name: 'Marcela Acevedo. P',
				status: true
			}],
			estado: {
				icon: 'P',
				class: 'orage',
				text: 'Pendiente Autorización',
				nameKey: 'AUTORIZADO'
			}
		},{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Alto Monto',
			origen: '32165498',
			destinatario: 'Empresa de Transportes Rurales Limitada',
			transferencia: '$400.000',
			firmas: [{
				name: 'Pablo Hernandez. A.',
				status: true
			},{
				name: 'Matias Contreras. B',
				status: true
			},{
				name: 'Maria Teresa Correa. R',
				status: true
			},{
				name: 'Marcela Acevedo. P',
				status: false
			}],
			estado: {
				icon: 'P',
				class: 'orage',
				text: 'Pendiente Autorización',
				nameKey: 'AUTORIZADO'
			}
		},{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Pagos Masivos',
			origen: '32165498',
			destinatario: 'Empresa de Transportes Rurales Limitada',
			transferencia: '$400.000',
			firmas: [{
				name: 'Pablo Hernandez. A.',
				status: true
			},{
				name: 'Matias Contreras. B',
				status: true
			},{
				name: 'Maria Teresa Correa. R',
				status: true
			},{
				name: 'Marcela Acevedo. P',
				status: false
			}],
			estado: {
				icon: 'P',
				class: 'orage',
				text: 'Pendiente Visado',
				nameKey: 'VISADO'
			}
		},{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Alto Monto',
			origen: '32165498',
			destinatario: 'Empresa de Transportes Rurales Limitada',
			transferencia: '$400.000',
			firmas: [{
				name: 'Pablo Hernandez. A.',
				status: true
			},{
				name: 'Matias Contreras. B',
				status: true
			},{
				name: 'Maria Teresa Correa. R',
				status: false
			},{
				name: 'Marcela Acevedo. P',
				status: false
			}],
			estado: {
				icon: 'P',
				class: 'orage',
				text: 'Pendiente Visado',
				nameKey: 'VISADO'
			}
		},{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Alto Monto',
			origen: '32165498',
			destinatario: 'Empresa de Transportes Rurales Limitada',
			transferencia: '$400.000',
			firmas: [{
				name: 'Pablo Hernandez. A.',
				status: true
			},{
				name: 'Matias Contreras. B',
				status: true
			},{
				name: 'Maria Teresa Correa. R',
				status: false
			},{
				name: 'Marcela Acevedo. P',
				status: false
			}],
			estado: {
				icon: 'P',
				class: 'orage',
				text: 'Pendiente Autorización',
				nameKey: 'AUTORIZADO'
			}
		},{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Pagos Masivos',
			origen: '32165498',
			destinatario: 'Empresa de Transportes Rurales Limitada',
			transferencia: '$400.000',
			firmas:  [{
				name: 'Pablo Hernandez. A.',
				status: true
			},{
				name: 'Matias Contreras. B',
				status: true
			},{
				name: 'Maria Teresa Correa. R',
				status: true
			},{
				name: 'Marcela Acevedo. P',
				status: false
			}],
			estado: {
				icon: 'P',
				class: 'orage',
				text: 'Pendiente Visado',
				nameKey: 'VISADO'
			}
		}
	];

	$scope.toggleAll = toggleAll;
	$scope.toggle = toggle;
	activate();
	
	function activate() {

		$scope.currentCompany = { nameID: null, name: '', rol: '', accounts: [] };
		$scope.currentCompany.nameID = userLogin.currentCompany;
		for(var i = 0;i < userLogin.companies.length;i++) {

			if (userLogin.companies[i].nameID == $scope.currentCompany.nameID) {
				$scope.currentCompany.rol = userLogin.companies[i].rol;
				$scope.currentCompany.name = userLogin.companies[i].name;
				$scope.currentCompany.accounts = userLogin.companies[i].accounts;
				break;
			}
		}

		if ($scope.currentCompany.accounts.length) {
			$scope.existAccounts = true;
			self.accounts = $scope.currentCompany.accounts;
		}
	}

	function toggleAll(list) {
		
		var resetList = self.selectedDummyDataTransfer ? false : true;
		resetItemSelected(list, resetList);
	}
	function toggle(item, list, all) {

		var count = countSelectedItems(list);
		self[all] = (!item.selected && count == list.length - 1) ? true : false;
	}

	function countSelectedItems(list) {

		var count = 0;
		for(var i = 0; i < list.length; i++) {
			if (list[i].selected) count++;
		}

		return count;
	}
	function resetItemSelected(list, action) {
		
		for(var i = 0; i < list.length; i++) {
			list[i].selected = action;
		}
	}

	function resetControls() {
		// self.chequeMotivo = '';
		// $scope.selectedCheques = [];
		
		// $scope.lastMovement = [];
		// $scope.interes = [];
		// $scope.historica = [];
		// $scope.cheques = [];
	}

	function inArray(array, key, value) {

		var position = false;
		for(var i = 0; i < array.length; i++) {
			if (array[i][key] == value) {
				position = i;
				break;
			}
		}

		return position;
	}

	$scope.$on('company::change', function(data) {
		
		$scope.loadAccounts = true;
		$timeout(function(){
			$scope.currentCompany = data.targetScope.currentCompany;
			if (!$scope.currentCompany.accounts.length) {
				$scope.existAccounts = false;
			}else {
				$scope.existAccounts = true;
			}
			self.accounts = $scope.currentCompany.accounts;
			$scope.loadAccounts = false;
		}, 30);
	});
	$scope.$on('account::change', function(e, data) {
		e.preventDefault();
		e.stopPropagation();

		resetControls();
		$scope.loadTabData = false;

		var dataCopy = Object.assign({}, data);
		// $scope.lastMovement = dataCopy.account.lastMovement || [];
		// $scope.interes = dataCopy.account.interes || [];
		// $scope.historica = dataCopy.account.historica || [];
		// if (dataCopy.credito.cheques.length) {
		// 	angular.forEach(dataCopy.credito.cheques, element => {
		// 		element.selected = false;
		// 	});
		// }
		// $scope.cheques = dataCopy.credito.cheques || [];
		$timeout(function(){
			$scope.loadTabData = true;
		}, 30);
	});
}
