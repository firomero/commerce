export default function ProductController($scope, userLogin, $stateParams) {
	'ngInject';

	let self = this;

	const monthNames = [
		"January", "February", "March", "April", "May", "June", "July",
		"August", "September", "October", "November", "December"
	];
	const dayOfWeekNames = [
		"Sunday", "Monday", "Tuesday",
		"Wednesday", "Thursday", "Friday", "Saturday"
	];
	$scope.slider = {
		value: Math.floor(Math.random() * 36)
	};
	$scope.currentCompany = {nameID: null, name: '', rol: '', accounts: []};
	$scope.loadAccounts = false;
	$scope.loadTabData = false;
	$scope.existAccounts = false;
	$scope.products = [];
	$scope.cuotes = [];
	$scope.assets = [];
	$scope.selectedStateOption = "";
	$scope.selectedTypeOption = "";
	$scope.no = "";
	$scope.showAdvancedSearch = false;
	$scope.factoringTabVisibility = 'WALLET';
	const sections = ['credito', 'deposito', 'forward', 'leasing', 'factoring', 'boleta', 'comex'];
	const date = new Date();
	const dateStart = new Date(date.getFullYear(), date.getMonth(), 1);
	const dateEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	self.dateStart = formatDate(dateStart, 'dd/MM/yyyy');
	self.dateEnd = formatDate(dateEnd, 'dd/MM/yyyy');


	$scope.onTabChanges = onTabChanges;
	$scope.toggleAdvancedSearch = toggleAdvancedSearch;

	activate();

	function activate() {

		$scope.currentCompany = {nameID: null, name: '', rol: '', accounts: []};
		$scope.currentCompany.nameID = userLogin.currentCompany;
		for (let i = 0; i < userLogin.companies.length; i++) {

			if (userLogin.companies[i].nameID === $scope.currentCompany.nameID) {
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
		$scope.states = [
			{
				class: 'green',
				text: 'CANCELADO'
			},
			{
				class: 'yellow',
				text: 'VIGENTE'
			}
		];

		$scope.cuoteStates = [
			{
				class: 'green',
				text: 'PAGADA'
			},
			{
				class: 'yellow',
				text: 'PENDIENTE'
			}
		];

		$scope.rentStates = [
			{
				class: 'green',
				text: 'CANCELADO'
			},
			{
				class: 'yellow',
				text: 'VIGENTE'
			},
			{
				class: 'red',
				text: 'MOROSO / 366 Días'
			}
		];

		const deadlines = [30, 90, 120, 150];

		const clients = ['SOUTH COMMERCE S.A.', 'COMPASS GROUP S.A.', 'ASES DED INV', 'EL BOSQUE PIP'];

		const randomBoolean = [
			true,
			false,
		];

		const assetsDescription = [
			'Sistema Eléctrico de Fuerza',
			'Sistema XSX',
			'Sistema Estéreo HF',
			'Reproductor VCR',
			'Inmobiliaria'
		];

		const documentTypes = [
			'Factura',
			'Letra',
			'Pagaré',
		];

		const debtors = [
			{code: '096.792.430-k', description: 'EXPORTADORA SUBSOLE S.A.'},
			{code: '094.732.130-k', description: 'SODIMAC S.A.'},
			{code: '044.431.120-w', description: 'PRIMUS CAPITAL S.A.'},
		];

		$scope.currencies = [
			{code: 'USD', description: 'DOLAR ESTADOUNIDENSE'},
			{code: 'CLP', description: 'PESO CHILENO'},
			{code: 'UF', description: 'UNIDAD DE FOMENTO'},
		];

		$scope.types = [
			"COMPRA",
			"VENTA",
		];

		$scope.insurances = [
			"BANCO",
			"CLIENTE",
		];

		for (let i = 0; i < 100; i++) {
			$scope.products.push({
				carta: '1.232.346,6',
				estado: $scope.states[getRandomIntInclusive(0, 1)],
				fecha: '22/11/2017',
				vence: '22/11/2017',
				contingencia: ' 4.529,25',
				saldo: '4.529,25',
				moneda: $scope.currencies[getRandomIntInclusive(0, 1)],
				ref: '123456',
				plazo: deadlines[getRandomIntInclusive(0, 3)],
				tasa: '0,3%',
				cliente: clients[getRandomIntInclusive(0, 3)],
				tipo: $scope.types[getRandomIntInclusive(0, 1)],
				seguro: $scope.insurances[getRandomIntInclusive(0, 1)],
				rut: '9999999999-0',
				anticipado: randomBoolean[getRandomIntInclusive(0, 1)],
				deudor: debtors[getRandomIntInclusive(0, 2)],
				tipo_documento: documentTypes[getRandomIntInclusive(0, 1)],
			});
		}

		for (let i = 0; i < 25; i++) {
			$scope.cuotes.push({
				numero: i + 1,
				monto: '$1.232.346,6',
				capital: '$1.232.346,6',
				interes: '$1.232.346,6',
				capital_reducido: '$1.232.346,6',
				gasto_mora: {
					monto: '$2.234.543',
					dias: '0 Días'
				},
				gasto_cobranza: '$0.00',
				estado: $scope.cuoteStates[getRandomIntInclusive(0, 1)],
				total: '$1.232.346,6',
				fecha: '22/11/2017',
				recaudado: '$1.232.346,6',
				estado_renta: $scope.rentStates[getRandomIntInclusive(0, 2)]
			});
		}

		for (let i = 0; i < 5; i++) {
			$scope.assets.push({
				cantidad: getRandomIntInclusive(1, 5),
				descripcion: assetsDescription[i],
				seguro: $scope.insurances[getRandomIntInclusive(0, 1)],
				unitario: '$1.232.346,6',
				total: '$1.232.346,6',
				moneda: $scope.currencies[getRandomIntInclusive(0, 1)],
			});
		}

		$scope.selectedIndex = sections.indexOf($stateParams.id);

		$scope.loadTabData = true;
	}

	function toggleAdvancedSearch() {
		$scope.showAdvancedSearch = !$scope.showAdvancedSearch;
		console.log($scope.showAdvancedSearch);
	}

	function onTabChanges(currentTabIndex) {
		$scope.selectedIndex = currentTabIndex;

	}

	function formatDate(date, patternStr) {
		if (!patternStr) {
			patternStr = 'dd/mm/yyyy';
		}
		const day = date.getDate(),
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

	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	$scope.$on('company::change', function (data) {

		$scope.loadAccounts = true;
		self.showAuthorize = false;

		$timeout(function () {
			$scope.currentCompany = data.targetScope.currentCompany;
			if (!$scope.currentCompany.accounts.length) {
				$scope.existAccounts = false;
			} else {
				$scope.existAccounts = true;
			}
			self.accounts = $scope.currentCompany.accounts;
			$scope.loadAccounts = false;
		}, 30);
	});

}
