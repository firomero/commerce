export default function UserController($scope, userLogin) {
	'ngInject';

	$scope.currentCompany = { nameID: null, name: '', rol: '', accounts: [] };
	$scope.loadAccounts = false;
	$scope.loadTabData = false;
	$scope.existAccounts = false;
	$scope.types = ['A', 'B', 'C'];
	$scope.rating = {
		admin: {
			value: 30,
			options: {
				min: 0,
				max: 37,
				size: 104,
				barColor: '#94BB20',
				trackColor: '#EAEAEA',
				fgColor:'white',
				inputColor:'white',
				pColor:'white',
				color: 'white',
				trackWidth: 1,
				barWidth: 5,
				readOnly: true,
				unit: ' / ' + 37,
				subText: {
					enabled: true,
					text: 'Admin',
					color: 'white',
				}
			}
		},
		apoderados: {
			value: 4,
			options: {
				min: 0,
				max: 6,
				size: 104,
				barColor: '#94BB20',
				trackColor: '#EAEAEA',
				trackWidth: 1,
				barWidth: 5,
				readOnly: true,
				unit: ' / ' + 6,
				subText: {
					enabled: true,
					text: 'Apoderados',
					color: 'white',
				}
			}
		},
		operadores: {
			value: 20,
			options: {
				min: 0,
				max: 25,
				size: 104,
				barColor: '#94BB20',
				trackColor: '#EAEAEA',
				trackWidth: 1,
				barWidth: 5,
				readOnly: true,
				subText: {
					enabled: true,
					text: 'Operadores',
					color: 'white',
				}
			}
		}
	};
	$scope.users = [];

	$scope.toggleUser = toggleUser;

	function toggleUser(item) {
		const value = !item.plus;
		for (let i = 0; i < $scope.users.length; i++) {
			$scope.users[i].plus = false;
		}
		item.plus = value;
	}

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

		for (let i = 0; i < 10 ; i++)
		{
			$scope.users.push({
				rut: getRandomArbitrary(i,1000),
				nombre: 'Andres Claudio',
				padre: 'Gonzales',
				madre: 'Arriagada',
				tipo: {
					icon: $scope.types[getRandomIntInclusive(0,2)],
					class: 'blue',
					text: '',
					nameKey: 'AUTORIZADO'
				},
				estado: {
					icon: i%2==0?'P':'V',
					class: i%2==0?'orage':'green',
					text: i%2==0?'Pendiente Autorización':'Vigente',
					nameKey: 'APROBADA'
				},
				tel: '+56 2 1234567890',
				mail: 'andres.gonzales@gmail.com'
			})
		}
		$scope.loadTabData = true;
	}

	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}

	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

}
