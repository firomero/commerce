export default function ProductController($scope, userLogin, $uibModal) {
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
	$scope.currentCompany = { nameID: null, name: '', rol: '', accounts: [] };
	$scope.loadAccounts = false;
	$scope.loadTabData = false;
	$scope.existAccounts = false;
	$scope.stateSelectOptions = ["vigente", "en tramite"];
	$scope.selectedStateOption = "";
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
		for(var i = 0;i < userLogin.companies.length;i++) {

			if (userLogin.companies[i].nameID == $scope.currentCompany.nameID) {
				$scope.currentCompany.rol = userLogin.companies[i].rol;
				$scope.currentCompany.name = userLogin.companies[i].name;
				$scope.currentCompany.accounts = userLogin.companies[i].accounts;
				break;
			}
		}
		// $scope.selectedIndex = $scope.labels.indexOf($scope.currentCompany.rol);

		if ($scope.currentCompany.accounts.length) {
			$scope.existAccounts = true;
			self.accounts = $scope.currentCompany.accounts;
		}

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
