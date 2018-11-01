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
	var monthNames = [
		"January", "February", "March", "April", "May", "June", "July",
		"August", "September", "October", "November", "December"
	];
	var dayOfWeekNames = [
		"Sunday", "Monday", "Tuesday",
		"Wednesday", "Thursday", "Friday", "Saturday"
	];
	var date = new Date();
	const dateStart  = new Date(date.getFullYear(), date.getMonth(), 1);
	const dateEnd  = new Date(date.getFullYear(), date.getMonth() +1 , 0);
	self.dateStart = formatDate(dateStart,'dd/MM/yyyy' );
	self.dateEnd = formatDate(dateEnd,'dd/MM/yyyy' );
	self.yearStart = dateStart.getFullYear();
	self.monthStart = formatDate(dateStart,'MM' );
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
	$scope.setAdvancedSearch = setAdvancedSearch;
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

	function setAdvancedSearch(calculate) {
		self.avanzadControl = !self.avanzadControl;
		if (calculate) {
			const startDate = new Date(self.yearStart,self.monthStart-1,1 );
			self.dateStart = formatDate(startDate,'dd/MM/yyyy');
			const dateVEnd  = new Date(startDate.getFullYear(), startDate.getMonth()+1  , 0);
			self.dateEnd = formatDate(dateVEnd,'dd/MM/yyyy' );
		}
	}

	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function updateVisible(value) {
		$scope.buttonCreditSubmit = value === 'CREDIT';
	}

	function formatDate(date, patternStr){
		if (!patternStr) {
			patternStr = 'dd/mm/yyyy';
		}
		var day = date.getDate(),
			month = date.getMonth(),
			year = date.getFullYear(),
			hour = date.getHours(),
			minute = date.getMinutes(),
			second = date.getSeconds(),
			miliseconds = date.getMilliseconds(),
			h = hour % 12,
			hh = twoDigitPad(h),
			HH = twoDigitPad(hour),
			mm = twoDigitPad(minute),
			ss = twoDigitPad(second),
			aaa = hour < 12 ? 'AM' : 'PM',
			EEEE = dayOfWeekNames[date.getDay()],
			EEE = EEEE.substr(0, 3),
			dd = twoDigitPad(day),
			M = month + 1,
			MM = twoDigitPad(M),
			MMMM = monthNames[month],
			MMM = MMMM.substr(0, 3),
			yyyy = year + "",
			yy = yyyy.substr(2, 2)
			;
		return patternStr
			.replace('hh', hh).replace('h', h)
			.replace('HH', HH).replace('H', hour)
			.replace('mm', mm).replace('m', minute)
			.replace('ss', ss).replace('s', second)
			.replace('S', miliseconds)
			.replace('dd', dd).replace('d', day)
			.replace('MMMM', MMMM).replace('MMM', MMM).replace('MM', MM).replace('M', M)
			.replace('EEEE', EEEE).replace('EEE', EEE)
			.replace('yyyy', yyyy)
			.replace('yy', yy)
			.replace('aaa', aaa)
			;
	}

	function twoDigitPad(num) {
		return num < 10 ? "0" + num : num;
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
			self.cheques[i].estado = states[a];
		}
		$timeout(function(){
			$scope.loadTabData = true;
		}, 30);
	});
}
