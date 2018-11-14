export default function UserModalController($scope, $timeout, $uibModal, $uibModalInstance, WizardHandler) {
	'ngInject';

	var self = this;
	// $scope.accounts = JSON.parse(localStorage.getItem('accounts'));
	// $scope.banks = BankService.getBanks();
	$scope.saving = false;
	// $scope.now = new Date();
	$scope.userTypes = [
		{
			id: 1,
			name: 'APODERADO'
		},
		{
			id: 2,
			name: 'OPERADOR'
		}
	];
	$scope.userTypeSelected = [
		{
			id: 1,
			name: 'A'
		},
		{
			id: 2,
			name: 'B'
		},
		{
			id: 3,
			name: 'C'
		}
	];
	$scope.genders = [
		{id: 1, name: 'Masculino'},
		{id: 1, name: 'Femenino'}
	];
	$scope.accountStorage =
	// $scope.pagos = [
	// 	{
	// 		id: 1,
	// 		name: 'PAGO PROVEEDORES',
	// 		text: 'Pago Proveedores'
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'PAGO REMUNERADOS',
	// 		text: 'Pago Remunerados'
	// 	},
	// 	{
	// 		id: 3,
	// 		name: 'OTROS PAGOS',
	// 		text: 'Otros Pagos'
	// 	}
	// ];
	// $scope.formas = [
	// 	{
	// 		id: 1,
	// 		name: 'Cargo a la Cuenta Nº 7003456780000'
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Cargo a la Cuenta Nº 7003456235659'
	// 	},
	// 	{
	// 		id: 3,
	// 		name: 'Cargo a la Cuenta Nº 7002332780000'
	// 	}
	// ];
	// $scope.ingresos = [
	// 	{
	// 		id: 1,
	// 		name: 'DOCUMENTO EXCELL',
	// 		text: 'Documento Excell'
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'DIGITACIÓN',
	// 		text: 'en Digitación'
	// 	}
	// ];
	// $scope.destinatarios = [
	// 	{
	// 		id: 0,
	// 		name: 'NUEVO DESTINATARIO'
	// 	},
	// 	{
	// 		id: 1,
	// 		name: 'EMPRESA DE TRANSPORTES RURALES LIMITADA'
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'COMPASS GROPU SA ASES DE INVERSIONES'
	// 	},
	// 	{
	// 		id: 3,
	// 		name: 'EXPORTADORA SUBSOLE S.A'
	// 	}
	// ];
	$scope.selectedStep = 1;
	$scope.stepData = [
		{step: 1, completed: false, data: {
			userType: {id: 1,name: 'APODERADO'}, 
			copyFunction: 'NO',
			users: [
				{
					id: 1, 
					name: 'Andres Claudio',
					permission: {
						accountStorage: [
							{id: 1,account: '3456789453'},
							{id: 5,account: '129546870'},
							{id: 6,account: '1209456789'}
						],
						moduleStorage: [
							{id: 1,name: 'Seguridad'},
							{id: 2,name: 'Créditos Comerciales'},
							{id: 7,name: 'Perfilamiento'},
							{id: 8,name: 'Mis Empresas'},
							{id: 9,name: 'Contacto'},
							{id: 10,name: 'Comex'}
						],
						moduleTransferStorage: [
							{id: 1,name: 'Autorizador'},
							{id: 3,name: 'Ingresador'},
							{id: 4,name: 'Visador'},
							{id: 2,name: 'Liberador'},
						]
					}
				},
				{
					id: 2, 
					name: 'Andres Claudio 1',
					permission: {
						accountStorage: [
							{id: 1,account: '3456789453'},
							{id: 5,account: '129546870'},
							{id: 6,account: '1209456789'}
						],
						moduleStorage: [
							{id: 1,name: 'Seguridad'},
							{id: 2,name: 'Créditos Comerciales'},
							{id: 7,name: 'Perfilamiento'},
							{id: 8,name: 'Mis Empresas'},
							{id: 9,name: 'Contacto'},
							{id: 10,name: 'Comex'}
						],
						moduleTransferStorage: [
							{id: 1,name: 'Autorizador'},
							{id: 3,name: 'Ingresador'},
							{id: 4,name: 'Visador'}
						]
					}
				},
				{
					id: 3, 
					name: 'Andres Claudio 2',
					permission: {
						accountStorage: [
							{id: 1,account: '3456789453'},
							{id: 5,account: '129546870'},
							{id: 6,account: '1209456789'}
						],
						moduleStorage: [
							{id: 1,name: 'Seguridad'},
							{id: 2,name: 'Créditos Comerciales'},
							{id: 7,name: 'Perfilamiento'},
							{id: 8,name: 'Mis Empresas'},
							{id: 9,name: 'Contacto'},
							{id: 10,name: 'Comex'}
						],
						moduleTransferStorage: [
							{id: 1,name: 'Autorizador'},
							{id: 3,name: 'Ingresador'},
							{id: 4,name: 'Visador'}
						]
					}
				},
			]
		}},
		{step: 2, completed: false, data: {
			checkAllAccount: false,
			accountStorage: [
				{id: 1,account: '3456789453',selected: false},
				{id: 2,account: '0987654321',selected: false},
				{id: 3,account: '1234567890',selected: false},
				{id: 4,account: '12056795633',selected: false},
				{id: 5,account: '129546870',selected: false},
				{id: 6,account: '1209456789',selected: false}
			],
			checkAllModule: false,
			moduleStorage: [
				{id: 1,name: 'Seguridad',selected: false},
				{id: 2,name: 'Créditos Comerciales',selected: false},
				{id: 3,name: 'Boletas de garantia',selected: false},
				{id: 4,name: 'Deposito a Plazo Empresa',selected: false},
				{id: 5,name: 'Factoring',selected: false},
				{id: 6,name: 'Forward',selected: false},
				{id: 7,name: 'Perfilamiento',selected: false},
				{id: 8,name: 'Mis Empresas',selected: false},
				{id: 9,name: 'Contacto',selected: false},
				{id: 10,name: 'Comex',selected: false}
			],
			checkAllTransferModule: false,
			moduleTransferStorage: [
				{id: 1,name: 'Autorizador',selected: false},
				{id: 2,name: 'Liberador',selected: false},
				{id: 3,name: 'Ingresador',selected: false},
				{id: 4,name: 'Visador',selected: false}
			]
		}},
		{step: 3, completed: false, data: {
			checkAllRule: false,
			ruleStorage: [
				{id: 1,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: '500.000.000', active: false,selected: false},
				{id: 2,rule: '(1A o 2B) y 1C',minAmmount: '20.000',maxAmmount: '20.000.000', active: false,selected: false},
				{id: 3,rule: '(1A o 2B) y 1C',minAmmount: '30.000',maxAmmount: '300.000', active: false,selected: false},
				{id: 4,rule: '(1A o 2B) y 1C',minAmmount: '500.000.000',maxAmmount: '500.000', active: false,selected: false},
				{id: 5,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: '100.000', active: false,selected: false},
				{id: 6,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: '50.000', active: false,selected: false},
				{id: 7,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: '75.500.000', active: false,selected: false},
				{id: 8,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: 0, active: false,selected: false},
				{id: 9,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: 0, active: false,selected: false},
				{id: 10,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: 0, active: false,selected: false},
				{id: 11,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: '100.000', active: false,selected: false},
				{id: 12,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: 0, active: false,selected: false},
				{id: 13,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: 0, active: false,selected: false},
				{id: 14,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: 0, active: false,selected: false},
				{id: 15,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: 0, active: false,selected: false},
				{id: 16,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: 0, active: false,selected: false},
				{id: 17,rule: '(1A o 2B) y 1C',minAmmount: '500.000.000',maxAmmount: '500.000', active: false,selected: false},
				{id: 18,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: '100.000', active: false,selected: false},
				{id: 19,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: '50.000', active: false,selected: false},
				{id: 20,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: 0, active: false,selected: false},
				{id: 21,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: 0, active: false,selected: false},
				{id: 22,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: 0, active: false,selected: false},
				{id: 23,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: 0, active: false,selected: false},
				{id: 24,rule: '(1A o 2B) y 1C',minAmmount: '20.000',maxAmmount: '20.000.000', active: false,selected: false},
				{id: 25,rule: '(1A o 2B) y 1C',minAmmount: '30.000',maxAmmount: '300.000', active: false,selected: false},
				{id: 26,rule: '(1A o 2B) y 1C',minAmmount: 0,maxAmmount: 0, active: false,selected: false},
			]
		}},
		{step: 4, completed: false, data: {}}
	];
	// $scope.userForm = {
	// 	utilFactura: false
	// };
	$scope.userList = JSON.parse(localStorage.getItem('userList')) || [];
	// self.action = action;
	// switch (self.action) {
	// 	case 'NOMINA': {
	// 		$scope.optionTitle = 'Tipo Nomina';
	// 		break;
	// 	}
	// 	default: {
	// 		$scope.optionTitle = 'Destinatario';
	// 		break;
	// 	}
	// }

	$scope.done = done;
	$scope.close = close;
	// $scope.addUser = addUser;
	// $scope.changeTitle = changeTitle;
	$scope.backStep = backStep;
	$scope.setLoadingStep = setLoadingStep;
	$scope.checkAll = checkAll;
	$scope.check = check;
	$scope.updateUserType = updateUserType;
	$scope.updateRules = updateRules;
	$scope.addUser = addUser;

	activate();

	function activate() {

		$scope.userRequest = randomString(10, "N");
		$scope.userTypeText = $scope.stepData[0].data.userType.id == 1 ? 'Apoderado' : 'Operador';
	}

	/**
	 * RANDOM STRING GENERATOR
	 *
	 * Use:       randomString(length [,"A"] [,"N"] );
	 * Default:   return a random alpha-numeric string
	 * Arguments: If you use the optional "A", "N" flags:
	 *            "A" (Alpha flag)   return random a-Z string
	 *            "N" (Numeric flag) return random 0-9 string
	 */
	function randomString(len, an){
		an = an&&an.toLowerCase();
		var str="", i=0, min=an=="a"?10:0, max=an=="n"?10:62;
		for(;i++<len;){
		var r = Math.random()*(max-min)+min <<0;
		str += String.fromCharCode(r+=r>9?r<36?55:61:48);
		}
		return str;
	}

	function close() {

		$uibModalInstance.dismiss();
	}

	function done() {
		addUser();
		$uibModalInstance.close();
	}

	function backStep() {
		$scope.stepData[$scope.selectedStep - 2].completed = false;
		$scope.selectedStep--;
	}

	function setLoadingStep() {

		$scope.saving = true;
		$timeout(function () {

			$scope.saving = false;
			$scope.stepData[$scope.selectedStep - 1 ].completed = true;
			$scope.selectedStep++;

			if ($scope.stepData[0].data.copyFunction == 'SI' && $scope.stepData[0].data.userSelect && $scope.selectedStep == 2) {

				$scope.stepData[1].data.accountStorage.forEach(element => {
					element.selected = false;
				});
				for (var i = 0; i < $scope.stepData[0].data.userSelect.permission.accountStorage.length; i++) {
					for (var k = 0; k < $scope.stepData[1].data.accountStorage.length; k++) {
						if ($scope.stepData[1].data.accountStorage[k].id == $scope.stepData[0].data.userSelect.permission.accountStorage[i].id) {
							$scope.stepData[1].data.accountStorage[k].selected = true;
							break;
						}
					}
				}

				$scope.stepData[1].data.moduleStorage.forEach(element => {
					element.selected = false;
				});
				for (var i = 0; i < $scope.stepData[0].data.userSelect.permission.moduleStorage.length; i++) {
					for (var k = 0; k < $scope.stepData[1].data.moduleStorage.length; k++) {
						if ($scope.stepData[1].data.moduleStorage[k].id == $scope.stepData[0].data.userSelect.permission.moduleStorage[i].id) {
							$scope.stepData[1].data.moduleStorage[k].selected = true;
							break;
						}
					}
				}

				$scope.stepData[1].data.moduleTransferStorage.forEach(element => {
					element.selected = false;
				});
				for (var i = 0; i < $scope.stepData[0].data.userSelect.permission.moduleTransferStorage.length; i++) {
					for (var k = 0; k < $scope.stepData[1].data.moduleTransferStorage.length; k++) {
						if ($scope.stepData[1].data.moduleTransferStorage[k].id == $scope.stepData[0].data.userSelect.permission.moduleTransferStorage[i].id) {
							$scope.stepData[1].data.moduleTransferStorage[k].selected = true;
							break;
						}
					}
				}
			}

			WizardHandler.wizard().next();
		}, 1000);
	}

	function checkAll(list, controlValue, index) {

		for (var i = 0; i < list.length; i++) {
			list[i].selected = $scope.stepData[index].data[controlValue];
		}
	}

	function check(list, controlValue) {

		var count = 0;
		for (var i = 0; i < list.length; i++) {
			if (list[i].selected) count++;
		}

		$scope.stepData[1].data[controlValue] = list.length == count ? true : false;
	}

	function updateUserType($event) {
		$scope.userTypeText = $event.id == 1 ? 'Apoderado' : 'Operador';
	}

	function updateRules(item) {
		let count = 0;
		let list = $scope.stepData[2].data.ruleStorage;
		for (let i = 0; i < list.length; i++) {
			if (list[i].selected) count++;
		}
		$scope.stepData[2].data.checkAllRule = count === list.length ;
	}

	function addUser(){
		$scope.userList.push({
			"step1": $scope.stepData[0].data,
			"step2": $scope.stepData[1].data,
			"step3": $scope.stepData[2].data
		});
		$scope.selectedStep = 1;
		$scope.stepData[ 0 ].completed = false;
		$scope.stepData[ 1 ].completed = false;
		$scope.stepData[ 2 ].completed = false;
		localStorage.setItem('userList', JSON.stringify($scope.userList));
	}

	// function addUser(user) {
	// 	$scope.userList.push(user);
	// 	$scope.userForm = {
	// 		utilFactura: false,
	// 		razon: '',
	// 		rut: '',
	// 		mail: '',
	// 		forma: '',
	// 		bank: '',
	// 		account: '',
	// 		monto: ''
	// 	};

	// 	var message = "Estimado Marcelo se ha ingresado un nuevo Usuario a la nomina";
	// 	var confirmInstance = $uibModal.open({
	// 		ariaDescribedBy: 'modal-body',
	// 		template: require('../../common/components/message-confirm/message-confirm-two-action.jade')(),
	// 		controller: 'MessageConfirmController',
	// 		controllerAs: '$ctrl',
	// 		size: 'lg',
	// 		backdrop: false,
	// 		keyboard: false,
	// 		resolve: {
	// 			message: () => message,
	// 			textAction: () => 'CREAR OTRO USUARIO'
	// 		},
	// 		windowClass: 'bottom-confirm'
	// 	});

	// 	confirmInstance.result.then(function (response) {

	// 		if (response != undefined && response.success) {
	// 			// $scope.enableNextStep();
	// 		}
	// 	});
	// }

	// function finish() {

	// 	if (self.action == 'NEW_TRANSFER') {
	// 		var message = "Estimado JUAN PABLO Tú Solicitud se ha pasado a estado de AUTORIZACIÓN, se te enviará una notificación cuando los usuarios responsables Autorizen tú transferencia.";
	// 		var confirmInstance = $uibModal.open({
	// 			ariaDescribedBy: 'modal-body',
	// 			template: require('../../common/components/message-confirm/message-confirm.jade')(),
	// 			controller: 'MessageConfirmController',
	// 			controllerAs: '$ctrl',
	// 			size: 'lg',
	// 			backdrop: false,
	// 			keyboard: false,
	// 			resolve: {
	// 				message: () => message,
	// 				textPrimaryAction: () => undefined,
	// 				textAction: () => undefined
	// 			},
	// 			windowClass: 'bottom-confirm finish'
	// 		});
	// 	} else {

	// 		var message = "Estimado Marcelo su Nomina ha sido Creada Exitosamente a Tú Correo Jpr******@gmail.com.";
	// 		var confirmInstance = $uibModal.open({
	// 			ariaDescribedBy: 'modal-body',
	// 			template: require('../../common/components/message-confirm/message-confirm.jade')(),
	// 			controller: 'MessageConfirmController',
	// 			controllerAs: '$ctrl',
	// 			size: 'lg',
	// 			backdrop: false,
	// 			keyboard: false,
	// 			resolve: {
	// 				message: () => message,
	// 				textPrimaryAction: () => undefined,
	// 				textAction: () => undefined
	// 			},
	// 			windowClass: 'bottom-confirm finish'
	// 		});
	// 	}

	// 	confirmInstance.result.then(function (response) {

	// 		if (response != undefined && response.success) {
	// 			$uibModalInstance.close({success: true});
	// 		}
	// 	});

	// }

	// function changeTitle() {

	// 	switch (self.action) {
	// 		case 'NOMINA': {
	// 			$scope.optionTitle = 'Tipo Nomina';
	// 			break;
	// 		}
	// 		default: {
	// 			$scope.optionTitle = 'Destinatario';
	// 			break;
	// 		}
	// 	}
	// }
}
