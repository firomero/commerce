export default function LayoutController(userLogin, $scope, $mdSidenav, $location, $uibModal, UserService) {
    'ngInject';

    $scope.userLogin = userLogin;
    $scope.$uibModal = $uibModal;
    $scope.currentCompany = { nameID: null, name: '', rol: '', accounts: [] };
    $scope.currentAccount = null;
    $scope.currentCompany.nameID = $scope.userLogin.currentCompany;
    $scope.userCompanies = userLogin.companies;
    
    $scope.selectCompany = selectCompany;
    $scope.selectAccount = selectAccount;
    $scope.openToggle = openToggle;
    $scope.closeToggle = closeToggle;
    $scope.logout = logout;
    $scope.newTransference = newTransference;
    
    activate();

    function activate() {
        for(var i = 0;i < $scope.userCompanies.length;i++) {

            if ($scope.userCompanies[i].nameID == $scope.currentCompany.nameID) {
                $scope.currentCompany.rol = $scope.userCompanies[i].rol;
                $scope.currentCompany.name = $scope.userCompanies[i].name;
                $scope.currentCompany.accounts = $scope.userCompanies[i].accounts;
                break;
            }
        }
        if ($scope.currentCompany.accounts.length) {
            $scope.currentAccount = $scope.currentCompany.accounts[0];
            localStorage.setItem('accounts', JSON.stringify($scope.currentCompany.accounts));
        }else {
            localStorage.setItem('accounts', JSON.stringify([]));
        }
    }

    function selectCompany(company) {
        
        $scope.currentCompany = company;
        if ($scope.currentCompany.accounts.length) {
            $scope.currentAccount = $scope.currentCompany.accounts[0];
            localStorage.setItem('accounts', JSON.stringify($scope.currentCompany.accounts));
        }else {
            localStorage.setItem('accounts', JSON.stringify([]));
        }
        $scope.$broadcast('company::change', {currentCompany: $scope.currentCompany});
    }

    function selectAccount(account) {
        
        $scope.currentAccount = account;
    }

    function openToggle(position) {
        
        $mdSidenav(position).toggle();
    }
        
    function closeToggle(position) {
        
        $mdSidenav(position).close();
    }

    function logout() {

        localStorage.removeItem('userLogin');
		$location.path('/login');
    }

    function newTransference(type) {
        
        var modalInstance = $scope.$uibModal.open({
            animation: false,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            template: require('../../transfer/view/transfer-modal.jade')(),
            controller: 'TransferModalController',
            controllerAs: '$ctrl',
            size: 'lg',
            windowClass: 'fullscreen',
            resolve: {
                action: function() {
                    return type;
                },
                destinatario: function() {
					return undefined;
				}
            }
        });
        
        // modalInstance.result.then(function (response) {
            
        // 	if (response != undefined  && response.success) {
        // 		// WizardHandler.wizard().reset();
        // 		// $scope.reset();
        // 	}
        // });
    }
}
    