export default function InvestmentController($scope, userLogin, $timeout, $uibModal) {
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

	$scope.dummyDataTransfer = [{
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
		},{
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
		},{
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
		},{
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
		},{
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
		},{
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
		},{
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
		},{
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
		},{
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
		},{
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

	// $scope.toggleAll = toggleAll;
	$scope.toggle = toggle;
	$scope.checkDetail = checkDetail;
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
		}
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
					return $scope.selectedCheques;
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

		var position = inArray($scope.selectedCheques, 'id', item.id);
		if (!item.selected && position === false) {
			$scope.selectedCheques.push(item);
		}else {
			$scope.selectedCheques.splice(position, 1);
		}
	}

	function resetControls() {
		self.chequeMotivo = '';
		$scope.selectedCheques = [];
		
		$scope.lastMovement = [];
		$scope.interes = [];
		$scope.historica = [];
		$scope.cheques = [];
	}

	// function toggleAll(list) {
		
	// 	var resetList = $scope.selectedDummyDataTransfer ? false : true;
	// 	resetItemSelected(list, resetList);
	// }
	// function toggle(item, list, all) {

	// 	var count = countSelectedItems(list);
	// 	$scope[all] = (!item.selected && count == list.length - 1) ? true : false;
	// }
	// function countSelectedItems(list) {

	// 	var count = 0;
	// 	for(var i = 0; i < list.length; i++) {
	// 		if (list[i].selected) count++;
	// 	}

	// 	return count;
	// }
	// function resetItemSelected(list, action) {
		
	// 	for(var i = 0; i < list.length; i++) {
	// 		list[i].selected = action;
	// 	}
	// }

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
			}
			$scope.loadAccounts = false;
		}, 30);
	});
	$scope.$on('account::change', function(e, data) {
		e.preventDefault();
		e.stopPropagation();

		resetControls();
		$scope.loadTabData = false;

		var dataCopy = Object.assign({}, data);
		$scope.lastMovement = dataCopy.account.lastMovement || [];
		$scope.interes = dataCopy.account.interes || [];
		$scope.historica = dataCopy.account.historica || [];
		if (dataCopy.credito.cheques.length) {
			angular.forEach(dataCopy.credito.cheques, element => {
				element.selected = false;
			});
		}
		$scope.cheques = dataCopy.credito.cheques || [];
		$timeout(function(){
			$scope.loadTabData = true;
		}, 30);
	});
}
