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
	$scope.currentCompany = { nameID: null, name: '', rol: '', accounts: [] };
	$scope.loadAccounts = false;
	$scope.loadTabData = false;
	$scope.existAccounts = false;
	$scope.products = [];
	$scope.selectedStateOption = "";
	const sections = ['credito','deposito', 'forward', 'leasing', 'factoring', 'boleta', 'comex'];
	const date = new Date();
	const dateStart  = new Date(date.getFullYear(), date.getMonth(), 1);
	const dateEnd  = new Date(date.getFullYear(), date.getMonth() +1 , 0);
	self.dateStart = formatDate(dateStart,'dd/MM/yyyy' );
	self.dateEnd = formatDate(dateEnd,'dd/MM/yyyy' );


	$scope.onTabChanges = onTabChanges;

	activate();

	function activate() {

		$scope.currentCompany = { nameID: null, name: '', rol: '', accounts: [] };
		$scope.currentCompany.nameID = userLogin.currentCompany;
		for(let i = 0; i < userLogin.companies.length; i++) {

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

		for(let i = 0; i < 100; i++){
			$scope.products.push({
				carta: '$1.232.346,6',
				estado: $scope.states[getRandomIntInclusive(0,1)],
				fecha: '22/11/2017',
				vence: '22/11/2017',
				contingencia: ' $4.529,25',
				saldo: '$4.529,25',
				moneda: 'DOLAR ESTADOUNIDENSE',
				ref:'123456'
			});
		}
		$scope.selectedIndex = sections.indexOf($stateParams.id);

		$scope.loadTabData = true;
	}

	function onTabChanges(currentTabIndex) {
		$scope.selectedIndex = currentTabIndex;

	}

	function formatDate(date, patternStr){
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
