export default function InvestmentController($scope, $stateParams, userLogin, $timeout, $uibModal, BankService) {
	'ngInject';

	var self = this;

	$scope.currentCompany = { nameID: null, name: '', rol: '', accounts: [] };
	$scope.loadAccounts = false;
	$scope.loadTabData = false;
	$scope.existAccounts = false;
	self.selectedCheques = [];
	$scope.userLogin = userLogin;
	$scope.itemPage = 6;

	self.lastMovement = [];
	self.lastMovementAll = [];
	self.lastMovementPagination = false;
	self.interes = [];
	self.interesAll = [];
	self.interesPagination = false;
	self.historica = [];
	self.historicaAll = [];
	self.historicaPagination = false;
	self.cheques = [];
	self.chequesAll = [];
	self.chequesPagination = false;
	self.buttonCreditSubmit = false;

	self.chequeMotivo = '';
	self.motivos = [
		{text: 'Perdida o Extravio', label: 'PERDIDA O EXTRAVIO', id: 1},
		{text: 'Robo', label: 'ROBO', id: 2},
		{text: 'Hurto', label: 'HURTO', id: 3},
		{text: 'Incumplimiento Comercial', label: 'INCUMPLIMIENTO COMERCIAL', id: 4},
		{text: 'Otros no especificados', label: 'OTROS NO ESPECIFICADOS', id: 5},
		{text: 'Alteración o falsificación', label: 'ALTERACIÓN O FALSIFICACIÓN', id: 6}
	];
	var date = new Date();
	const dateStart  = new Date(date.getFullYear(), date.getMonth(), 1);
	const dateEnd  = new Date(date.getFullYear(), date.getMonth() +1 , 0);
	self.dateStart = '0'+dateStart.getDate()+ ' / 0'+ dateStart.getMonth() + '/ ' + dateStart.getFullYear();
	self.dateEnd = '0'+dateEnd.getDate()+ ' / 0'+ dateEnd.getMonth() + '/ ' + dateEnd.getFullYear();
	self.yearStart = dateStart.getFullYear();
	self.monthStart = '0'+dateStart.getDay()+ ' / 0'+ dateStart.getMonth();
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

	$scope.dummyDataTransfer = [
		{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Alto Monto',
			origen: '32165498',
			destinatario: 'Empresa de Transportes Rurales Limitada',
			transferencia: '$400.000',
			firmas: 3,
			estado: 'P_AUT'
		},
		{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Alto Monto',
			origen: '32165498',
			destinatario: 'Empresa de Transportes Rurales Limitada',
			transferencia: '$400.000',
			firmas: 3,
			estado: 'P_AUT'
		},
		{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Alto Monto',
			origen: '32165498',
			destinatario: 'Empresa de Transportes Rurales Limitada',
			transferencia: '$400.000',
			firmas: 3,
			estado: 'P_AUT'
		},
		{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Pagos Masivos',
			origen: '32165498',
			destinatario: 'Empresa de Transportes Rurales Limitada',
			transferencia: '$400.000',
			firmas: 3,
			estado: 'P_AUT'
		},
		{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Alto Monto',
			origen: '32165498',
			destinatario: 'Empresa de Transportes Rurales Limitada',
			transferencia: '$400.000',
			firmas: 3,
			estado: 'P_AUT'
		},
		{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Alto Monto',
			origen: '32165498',
			destinatario: 'Empresa de Transportes Rurales Limitada',
			transferencia: '$400.000',
			firmas: 3,
			estado: 'P_AUT'
		},
		{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Pagos Masivos',
			origen: '32165498',
			destinatario: 'Empresa de Transportes Rurales Limitada',
			transferencia: '$400.000',
			firmas: 3,
			estado: 'P_AUT'
		},
		{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Alto Monto',
			origen: '32165498',
			destinatario: 'Empresa de Transportes Rurales Limitada',
			transferencia: '$400.000',
			firmas: 3,
			estado: 'P_AUT'
		},
		{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Alto Monto',
			origen: '32165498',
			destinatario: 'Empresa de Transportes Rurales Limitada',
			transferencia: '$400.000',
			firmas: 3,
			estado: 'P_AUT'
		},
		{
			selected: false,
			plus: false,
			plusData: [],
			date: '23-04-2016',
			type: 'Pagos Masivos',
			origen: '32165498',
			destinatario: 'Empresa de Transportes Rurales Limitada',
			transferencia: '$400.000',
			firmas: 3,
			estado: 'P_AUT'
		}
	];

	switch($stateParams.id) {
		case 'account': {
			$scope.visibilityTabControl = 'ACCOUNT';
			break;
		}
		case 'credit': {
			$scope.visibilityTabControl = 'CREDIT';
			break;
		}
	}

	$scope.toggle = toggle;
	$scope.checkDetail = checkDetail;
	$scope.pagination = pagination;
	$scope.updateVisible = updateVisible;
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

	function pagination(list) {
		const states = [
			{
				class: 'green',
				text: 'PAGADO'
			},
			{
				class: 'red',
				text: 'PROTESTADO'
			},
			{
				class: 'transparent',
				text: 'Sin Información'
			}
		];

		self[list + 'All'].forEach((item) => {
			if (list === 'cheques') {
				item.estado = states[getRandomIntInclusive(0,2)];
			}
			self[list].push(item);
		});
		self[list + 'Pagination'] = false;
	}

	function checkDetail() {

		var modalInstance = $uibModal.open({
			animation: false,
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			template: require('../view/check-detail.jade')(),
			controller: 'CheckDetailController',
			controllerAs: '$ctrl',
			size: 'lg',
			windowClass: 'fullscreen',
			resolve: {
				accounts: function() {
					return self.selectedCheques;
				},
				motivo: function() {
					return self.chequeMotivo;
				},
				userLogin: function() {
					return $scope.userLogin;
				}
			}
		});

		modalInstance.result.then(function (response) {

			if (response != undefined  && response.success) {
				console.log('asdasd');
			}
		});
	}

	function toggle(item) {

		var position = inArray(self.selectedCheques, 'id', item.id);
		if (!item.selected && position === false) {
			self.selectedCheques.push(item);
		}else {
			self.selectedCheques.splice(position, 1);
		}
	}

	function resetControls() {
		self.chequeMotivo = '';
		self.selectedCheques = [];

		self.lastMovement = [];
		self.lastMovementAll = [];
		self.interes = [];
		self.interesAll = [];
		self.historica = [];
		self.historicaAll = [];
		self.cheques = [];
		self.chequesAll = [];
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

	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function updateVisible(value) {
		if (value === 'CREDIT')
		{
			$scope.buttonCreditSubmit = true;
		}
		else{
			$scope.buttonCreditSubmit = false;
		}
	}

	$scope.$on('company::change', function(data) {

		$scope.loadAccounts = true;
		$timeout(function(){
			$scope.currentCompany = data.targetScope.currentCompany;
			$scope.existAccounts = !$scope.currentCompany.accounts.length ? false : true;
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
		if (dataCopy.account.lastMovement.length > $scope.itemPage) {
			self.lastMovementAll = dataCopy.account.lastMovement.splice($scope.itemPage, dataCopy.account.lastMovement.length);
			self.lastMovementPagination = true;
		}
		self.lastMovement = dataCopy.account.lastMovement || [];

		if (dataCopy.account.interes.length > $scope.itemPage) {
			self.interesAll = dataCopy.account.interes.splice($scope.itemPage, dataCopy.account.interes.length);
			self.interesPagination = true;
		}
		self.interes = dataCopy.account.interes || [];

		if (dataCopy.account.historica.length > $scope.itemPage) {
			self.historicaAll = dataCopy.account.historica.splice($scope.itemPage, dataCopy.account.historica.length);
			self.historicaPagination = true;
		}
		self.historica = dataCopy.account.historica || [];

		if (dataCopy.credito.cheques.length) {
			angular.forEach(dataCopy.credito.cheques, element => {
				element.selected = false;
			});
		}
		if (dataCopy.credito.cheques.length > $scope.itemPage) {
			self.chequesAll = dataCopy.credito.cheques.splice($scope.itemPage, dataCopy.credito.cheques.length);
			self.chequesPagination = true;
		}
		self.cheques = dataCopy.credito.cheques || [];
		const states = [
			{
				class: 'green',
				text: 'PAGADO'
			},
			{
				class: 'red',
				text: 'PROTESTADO'
			},
			{
				class: 'transparent',
				text: 'Sin Información'
			}
		];
		for (let i = 0; i < self.cheques.length; i++) {
			const a = getRandomIntInclusive(0,2);
			console.log(a);
			self.cheques[i].estado = states[a];
		}
		$timeout(function(){
			$scope.loadTabData = true;
		}, 30);
	});
}
