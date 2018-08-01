export default function InvestmentController($scope, userLogin, $timeout) {
	'ngInject';

	$scope.currentCompany = { nameID: null, name: '', rol: '', accounts: [] };
	$scope.loadAccounts = false;
	$scope.visibilityTabControl = 'ACCOUNT';
	$scope.chequeMotivo = null;
	$scope.lastMovement = [{
		date: '23-04-2016',
		description: 'Abono de Terceros',
		serie: '00000000000015',
		cargo: 100000,
		saldo: '400.000.0000'
	},{
		date: '23-04-2016',
		description: 'Abono de Terceros',
		serie: '00000000000015',
		cargo: 400000,
		saldo: '400.000.0000'
	},{
		date: '23-04-2016',
		description: 'Abono de Terceros',
		serie: '00000000000015',
		cargo: 400000,
		saldo: '400.000.0000'
	},{
		date: '23-04-2016',
		description: 'Sueldos / Nominas Lorem ipsum dolor set amet',
		serie: '00000000000015',
		cargo: 400000,
		saldo: '400.000.0000'
	},{
		date: '23-04-2016',
		description: 'Abono de Terceros',
		serie: '00000000000015',
		cargo: 400000,
		saldo: '400.000.0000'
	},{
		date: '23-04-2016',
		description: 'Abono de Terceros',
		serie: '00000000000015',
		cargo: 400000,
		saldo: '400.000.0000'
	},{
		date: '23-04-2016',
		description: 'Sueldos / Nominas Lorem ipsum dolor set amet',
		serie: '00000000000015',
		cargo: 400000,
		saldo: '400.000.0000'
	},{
		date: '23-04-2016',
		description: 'Abono de Terceros',
		serie: '00000000000015',
		cargo: 400000,
		saldo: '400.000.0000'
	},{
		date: '23-04-2016',
		description: 'Abono de Terceros',
		serie: '00000000000015',
		cargo: 400000,
		saldo: '400.000.0000'
	},{
		date: '23-04-2016',
		description: 'Abono de Terceros',
		serie: '00000000000015',
		cargo: 400000,
		saldo: '400.000.0000'
	}];
	$scope.interes = [{
		date: '23-04-2016',
		saldo: '400.000.0000',		
		tasa: '0,04',
		interes: '400.000'
	},{
		date: '23-04-2016',
		saldo: '400.000.0000',		
		tasa: '0,04',
		interes: '400.000'
	},{
		date: '23-04-2016',
		saldo: '400.000.0000',		
		tasa: '0,04',
		interes: '400.000'
	},{
		date: '23-04-2016',
		saldo: '400.000.0000',		
		tasa: '0,04',
		interes: '400.000'
	},{
		date: '23-04-2016',
		saldo: '400.000.0000',		
		tasa: '0,04',
		interes: '400.000'
	},{
		date: '23-04-2016',
		saldo: '400.000.0000',		
		tasa: '0,04',
		interes: '400.000'
	},{
		date: '23-04-2016',
		saldo: '400.000.0000',		
		tasa: '0,04',
		interes: '400.000'
	},{
		date: '23-04-2016',
		saldo: '400.000.0000',		
		tasa: '0,04',
		interes: '400.000'
	},{
		date: '23-04-2016',
		saldo: '400.000.0000',		
		tasa: '0,04',
		interes: '400.000'
	},{
		date: '23-04-2016',
		saldo: '400.000.0000',		
		tasa: '0,04',
		interes: '400.000'
	}];
	$scope.historica = [{
		year: '2016',
		month: 'Mayo',		
		folio: '32165498'
	},{
		year: '2016',
		month: 'Mayo',		
		folio: '32165498'
	},{
		year: '2016',
		month: 'Abril',		
		folio: '32165498'
	},{
		year: '2016',
		month: 'Marzo',		
		folio: '32165498'
	},{
		year: '2016',
		month: 'Febrero',		
		folio: '32165498'
	},{
		year: '2016',
		month: 'Mayo',		
		folio: '32165498'
	},{
		year: '2016',
		month: 'Noviembre',		
		folio: '32165498'
	},{
		year: '2016',
		month: 'Mayo',		
		folio: '32165498'
	},{
		year: '2016',
		month: 'Mayo',		
		folio: '32165498'
	},{
		year: '2016',
		month: 'Mayo',		
		folio: '32165498'
	}];
	$scope.selectedcheques = [];
	$scope.cheques = [{
		cheque: '123456789000000000',
		pago: '23-04-2016',		
		monto: '$100.000',
		selected: false,
		completed: true
	},{
		cheque: '123456789000000000',
		pago: 'Sin Información',		
		monto: '$100.000',
		selected: false
	},{
		cheque: '123456789000000000',
		pago: 'Sin Información',		
		monto: '$100.000',
		selected: false
	},{
		cheque: '123456789000000000',
		pago: 'Sin Información',		
		monto: '$100.000',
		selected: false
	},{
		cheque: '123456789000000000',
		pago: '23-04-2016',		
		monto: '$100.000',
		selected: false,
		completed: true
	},{
		cheque: '123456789000000000',
		pago: '23-04-2016',		
		monto: '$100.000',
		selected: false,
		completed: true
	},{
		cheque: '123456789000000000',
		pago: '23-04-2016',		
		monto: 'Sin Información',
		selected: false
	},{
		cheque: '123456789000000000',
		pago: '23-04-2016',		
		monto: 'Sin Información',
		selected: false
	},{
		cheque: '123456789000000000',
		pago: '23-04-2016',		
		monto: 'Sin Información',
		selected: false
	},{
		cheque: '123456789000000000',
		pago: '23-04-2016',		
		monto: '$900.000',
		selected: false,
		completed: true
	}];
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
	}];

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
	}

	function toggleAll(list) {
		
		var resetList = $scope.selectedDummyDataTransfer ? false : true;
		resetItemSelected(list, resetList);
	}
	function toggle(item, list, all) {

		var count = countSelectedItems(list);
		$scope[all] = (!item.selected && count == list.length - 1) ? true : false;
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
	
	$scope.$on('company::change', function(data) {
		
		$scope.loadAccounts = true;
		$timeout(function(){
			$scope.currentCompany = data.targetScope.currentCompany;
			$scope.loadAccounts = false;
		}, 30);
	});
}
