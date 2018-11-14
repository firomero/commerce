export default function ProductController($scope, userLogin, $uibModal) {
	'ngInject';

	let self = this;
	$scope.currentCompany = { nameID: null, name: '', rol: '', accounts: [] };
	$scope.loadAccounts = false;
	$scope.loadTabData = false;
	$scope.existAccounts = false;
	
	$scope.toggleUser = toggleUser;
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
		$scope.selectedIndex = $scope.labels.indexOf($scope.currentCompany.rol);

		if ($scope.currentCompany.accounts.length) {
			$scope.existAccounts = true;
			self.accounts = $scope.currentCompany.accounts;
		}

		$scope.loadTabData = true;
	}

	function onTabChanges(currentTabIndex) {
		$scope.selectedIndex = currentTabIndex;

	}

	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
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
