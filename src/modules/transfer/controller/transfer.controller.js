export default function TransferController($scope, $rootScope, $stateParams, userLogin, $timeout, $uibModal, BankService) {
	'ngInject';

	var self = this;

	$scope.itemPage = 5;
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
	
	self.dataTransfer = [];
	self.dataTransferAll = [];
	self.dataTransferPagination = false;
	self.selectedDataTransfer = false;

	self.dataDestinatarios = [];
	self.dataDestinatariosAll = [];
	self.dataDestinatariosPagination = false;

	self.dataHistoricos = [];
	self.dataHistoricosAll = [];
	self.dataHistoricosPagination = false;

	self.otherAccount = {
		banco: '',
		account: '',
		type: '' 
	};

	$scope.toggleAll = toggleAll;
	$scope.toggle = toggle;
	$scope.addAccount = addAccount;
	$scope.removeAccount = removeAccount;
	$scope.newTransference = newTransference;
	$scope.onTabChanges = onTabChanges;
	$scope.pagination = pagination;
	$scope.successTransferencia = successTransferencia;
	$scope.successDestinatario = successDestinatario;
	
	activate();

	switch($stateParams.id) {
		case 'resumen': {
			$scope.selectedIndex = 0;
			break;	
		}
		case 'destinatarios': {
			$scope.selectedIndex = 1;
			break;	
		}
		case 'historicas': {
			$scope.selectedIndex = 2;
			break;	
		}
	}
	
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

	function onTabChanges(currentTabIndex){
		$scope.selectedIndex = currentTabIndex;
    }

	function addAccount(item, save) {

		item.updateAccount = false;
		$timeout(function(){
			item.account.accounts.push(save);
			self.otherAccount = {
				banco: '',
				account: '',
				type: '' 
			};
			item.updateAccount = true;
		}, 30);		
	}

	function removeAccount(item, $index) {
		item.updateAccount = false;
		$timeout(function(){
			item.account.accounts.splice($index, 1);
			item.updateAccount = true;
		}, 30);		
	}

	function toggleAll(list) {
		
		var resetList = self.selectedDataTransfer ? false : true;
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
		self.dataTransfer = [];
		self.dataTransferAll = [];
		self.dataDestinatarios = [];
		self.dataDestinatariosAll = [];
		self.dataHistoricos = [];
		self.dataHistoricosAll = [];
	}

	function newTransference(destinatario) {
		
		var modalInstance = $uibModal.open({
			animation: false,
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			template: require('../view/transfer-modal.jade')(),
			controller: 'TransferModalController',
			controllerAs: '$ctrl',
			size: 'lg',
			windowClass: 'fullscreen',
			resolve: {
				action: function() {
					return 'NEW_TRANSFER';
				},
				destinatario: function() {
					return destinatario
				}
			}
		});
		
		modalInstance.result.then(function (response) {
			
			if (response != undefined  && response.success) {
				// WizardHandler.wizard().reset();
				// $scope.reset();
			}
		});
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

	function pagination(list) {
		
		self[list + 'All'].forEach((item) => {
			self[list].push(item);
		});
		self[list + 'Pagination'] = false;
	}


	function successTransferencia(action, item) {
		
		if (action == 'APROBADO') {
			var message = "Estimado JUAN PABLO usted ha aprobado una transferencia."; 
			var confirmInstance = $uibModal.open({
				ariaDescribedBy: 'modal-body',
				template: require('../../common/components/message-confirm/message-confirm.jade')(),
				controller: 'MessageConfirmController',
				controllerAs: '$ctrl',
				size: 'lg',
				backdrop: false,
				keyboard  : false,			
				resolve: {
					message: () => message,
					textPrimaryAction: () => undefined,
					textAction: () => undefined
				},
				windowClass: 'bottom-confirm finish'
			});
		}else {

			var message = "Estimado JUAN PABLO usted ha rechazado una transferencia."; 
			var confirmInstance = $uibModal.open({
				ariaDescribedBy: 'modal-body',
				template: require('../../common/components/message-confirm/message-confirm.jade')(),
				controller: 'MessageConfirmController',
				controllerAs: '$ctrl',
				size: 'lg',
				backdrop: false,
				keyboard  : false,			
				resolve: {
					message: () => message,
					textPrimaryAction: () => 'CERRAR',
					textAction: () => undefined
				},
				windowClass: 'bottom-danger finish'
			});
		}

		confirmInstance.result.then(function (response) {
			
			if (response != undefined  && response.success) {
				// $scope.close();
			}
		});
	}

	function successDestinatario(action, item) {
		
		if (action == 'APROBADO') {
			var message = "Estimado JUAN PABLO usted ha aprobado un destinatario."; 
			var confirmInstance = $uibModal.open({
				ariaDescribedBy: 'modal-body',
				template: require('../../common/components/message-confirm/message-confirm.jade')(),
				controller: 'MessageConfirmController',
				controllerAs: '$ctrl',
				size: 'lg',
				backdrop: false,
				keyboard  : false,			
				resolve: {
					message: () => message,
					textPrimaryAction: () => undefined,
					textAction: () => undefined
				},
				windowClass: 'bottom-confirm finish'
			});
		}else {

			var message = "Estimado JUAN PABLO usted ha rechazado un destinatario."; 
			var confirmInstance = $uibModal.open({
				ariaDescribedBy: 'modal-body',
				template: require('../../common/components/message-confirm/message-confirm.jade')(),
				controller: 'MessageConfirmController',
				controllerAs: '$ctrl',
				size: 'lg',
				backdrop: false,
				keyboard  : false,			
				resolve: {
					message: () => message,
					textPrimaryAction: () => 'CERRAR',
					textAction: () => undefined
				},
				windowClass: 'bottom-danger finish'
			});
		}

		confirmInstance.result.then(function (response) {
			
			if (response != undefined  && response.success) {
				// $scope.close();
			}
		});
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
		if (dataCopy.transferencias.estados.length > $scope.itemPage) {
			self.dataTransferAll = dataCopy.transferencias.estados.splice($scope.itemPage, dataCopy.transferencias.estados.length);
			self.dataTransferPagination = true;
		}
		self.dataTransfer = dataCopy.transferencias.estados || [];

		if (dataCopy.transferencias.destinatarios.length > $scope.itemPage) {
			self.dataDestinatariosAll = dataCopy.transferencias.destinatarios.splice($scope.itemPage, dataCopy.transferencias.destinatarios.length);
			self.dataDestinatariosPagination = true;
		}
		self.dataDestinatarios = dataCopy.transferencias.destinatarios || [];

		if (dataCopy.transferencias.historicos.length > $scope.itemPage) {
			self.dataHistoricosAll = dataCopy.transferencias.historicos.splice($scope.itemPage, dataCopy.transferencias.historicos.length);
			self.dataHistoricosPagination = true;
		}
		self.dataHistoricos = dataCopy.transferencias.historicos || [];

		$timeout(function(){
			$scope.loadTabData = true;
		}, 30);
	});
}
