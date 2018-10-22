export default function SIIModalController($scope, $timeout, $uibModal, $uibModalInstance, WizardHandler) {
	'ngInject';

	$scope.saving = false;	
	$scope.accountStorage =[];
	$scope.accounts =[];
	$scope.selectedStep = 1;
	$scope.stepData = [
		{step: 1, completed: false, data: {userType: {id: 1,name: 'APODERADO'}, copyFunction: 'NO'}},
        {step: 2, completed: false, data: {	}}, 
        {step: 3, completed: false, data: {}}     
    ];
    $scope.enterprises =  [
        {
           name: 'Kimberly Clark Chile S.A',
           nameID: 'KIMBERLY',
           accounts: [
               {
                   number: getRandomArbitrary(1,1000000),
                   amount:  '$'+ getRandomArbitrary(1,1000000)
               },
               {
                   number: getRandomArbitrary(1,1000000),
                   amount:  '$'+ getRandomArbitrary(1,1000000)
               },
               {
                   number: getRandomArbitrary(1,1000000),
                   amount:  '$'+ getRandomArbitrary(1,1000000)
               }
           ]
        },
        {
           name: 'Transbank S.A',
           nameID: 'TRANSBANK',
           accounts: [
               {
                   number: getRandomArbitrary(1,1000000),
                   amount:  '$'+ getRandomArbitrary(1,1000000)
               },
               {
                   number: getRandomArbitrary(1,1000000),
                   amount:  '$'+ getRandomArbitrary(1,1000000)
               },
               {
                   number: getRandomArbitrary(1,1000000),
                   amount:  '$'+ getRandomArbitrary(1,1000000)
               }
           ]
        },
        {
           name: 'Coca-Cola de Chicle S.A',
           nameID: 'COCACOLA',
            accounts: [
               {
                   number: getRandomArbitrary(1,1000000),
                   amount: '$'+ getRandomArbitrary(1,1000000)
               },
               {
                   number: getRandomArbitrary(1,1000000),
                   amount:  '$'+ getRandomArbitrary(1,1000000)
               },
               {
                   number: getRandomArbitrary(1,1000000),
                   amount:  '$'+ getRandomArbitrary(1,1000000)
               }
           ]
        }
    ]

    $scope.selectedAccount = {};
    $scope.selectedEnterprise = {};
	
	$scope.done = done;
	$scope.close = close;

	$scope.setLoadingStep = setLoadingStep;
	$scope.stepAccount = stepAccount;
	$scope.stepAmount = stepAmount;

	activate();

	function activate  () {

    };

    function stepAccount (enterprise) {
        $scope.accounts = enterprise.accounts;
        $scope.selectedEnterprise = enterprise;
    }

    function stepAmount(account) {
        $scope.stepData[1].data.amount = account.amount;
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
	function randomString  (len, an)  {
		an = an&&an.toLowerCase();
		var str="", i=0, min=an=="a"?10:0, max=an=="n"?10:62;
		for(;i++<len;){
		var r = Math.random()*(max-min)+min <<0;
		str += String.fromCharCode(r+=r>9?r<36?55:61:48);
		}
		return str;
    }
    
    function getRandomArbitrary  (min, max)  {
		return Math.random() * (max - min) + min;
	}

	function getRandomIntInclusive  (min, max)  {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function close() {

		$uibModalInstance.dismiss();
	}

	function done() {
		$uibModalInstance.close({enterprise: $scope.selectedEnterprise});
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
