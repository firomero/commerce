export default function ReglaModalController($scope, $timeout, $uibModal, $uibModalInstance, WizardHandler) {
	'ngInject';

	$scope.saving = false;

	$scope.genders = [
		{id: 1, name: 'Masculino'},
		{id: 1, name: 'Femenino'}
	];
	$scope.accountStorage =[];
	$scope.selectedStep = 1;
	$scope.stepData = [
		{step: 1, completed: false, data: {userType: {id: 1,name: 'APODERADO'}, copyFunction: 'NO'}},
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



	$scope.done = done;
	$scope.close = close;

	$scope.setLoadingStep = setLoadingStep;



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
		$uibModalInstance.close();
	}


	function setLoadingStep() {

		$scope.saving = true;
		$timeout(function () {

			$scope.saving = false;
			$scope.stepData[$scope.selectedStep - 1 ].completed = true;
			$scope.selectedStep++;
			WizardHandler.wizard().next();
		}, 1000);
	}

}
