export default function LayoutController(userLogin, $scope, $mdSidenav, $location, $uibModal, UserService) {
    'ngInject';

    $scope.userLogin = userLogin;
    $scope.$uibModal = $uibModal;
    $scope.currentCompany = { nameID: null, name: '', rol: '', accounts: [] };
    $scope.currentAccount = null;
    $scope.currentCompany.nameID = $scope.userLogin.currentCompany;
    $scope.userCompanies = userLogin.companies;
    $scope.movilCodes = ["+09", "+01", "+02", "+05" , "+56"];
    $scope.fixCodes = ["+59", "+56", "+58", "+78"];
    $scope.cities = ["Santiago", "Almeria", "Alberta", "Madrid", "Vasco"];
    $scope.towns = ["Palermo", "Kansas", "Detroit", "Manhattan"];
    $scope.communications = [{ name: "Correo electrónico", selected : true }, { name: "Dirección particular" }, { name: "Dirección comercial" }, { name: "Celular (Notificación push)"}];
    $scope.communicationsEnterprise = [{ name: "Correo electrónico", selected: true }, { name: "Dirección particular" }, { name: "Dirección comercial" }, { name: "Celular (Notificación push)"}];
    $scope.communicationsCredits = [{ name: "Correo electrónico", selected: true }, { name: "Dirección particular", selected: true }, { name: "Dirección comercial" }, { name: "Celular (Notificación push)"}];
    $scope.secretQuestions = ["¿Cómo se llama tu hermano?", "¿Quién fue tu primera maestra?", "¿En cuál ciudad naciste?", "¿Dónde te casaste?"];
    $scope.secretQuestion = $scope.secretQuestions[0];
    $scope.cartolaCom = [{ name: "Correo electrónico" }];
    $scope.cartolaEnterprise = [{ name: "Correo electrónico" }];
    $scope.cartolaCredit = [{ name: "Correo electrónico" }, { name: "Dirección particular" }];
    $scope.code = "+56";
    $scope.fix = "+56";
    $scope.userMovil = " 9 1584599";
    $scope.userMail = "jprojas@gmail.com";
    $scope.cartolaMail = "jprojas@gmail.com";
    $scope.eterpriseMail = "jprojas@gmail.com";
    $scope.creditMail = "jprojas@gmail.com";
    $scope.userPhone = " 2 1584599";
    $scope.userStreet = "Av. Santa Maria";
    $scope.userHome = 9200;
    $scope.userApto = 41;
    $scope.town = $scope.towns[0];
    $scope.city = $scope.cities[0];
    $scope.answer = "Juana";
    $scope.editProfile = false;
    $scope.editToken = false;
    $scope.editCom = false;
    $scope.selectCompany = selectCompany;
    $scope.selectAccount = selectAccount;
    $scope.openToggle = openToggle;
    $scope.closeToggle = closeToggle;
    $scope.logout = logout;
    $scope.newTransference = newTransference;
    $scope.toggleProfile = toggleProfile;
    $scope.changeCom = changeCom;

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

    function closeToggle(position, action) {

    	$scope.editProfile = false;
        $scope.editToken = false;
        $scope.editCom = false;
        $mdSidenav(position).close();
        if (action === 'save') {
            const message = "Cambios guardados.";
            const confirmInstance = $uibModal.open({
                ariaDescribedBy: 'modal-body',
                template: require('../../common/components/message-confirm/message-success-alert.jade')(),
                controller: 'MessageConfirmController',
                controllerAs: '$ctrl',
                size: 'lg',
                backdrop: 'static',
                keyboard: false,
                resolve: {
                    message: () => message,
                    textPrimaryAction: () => undefined,
                    textAction: () => undefined
                },
                windowClass: 'bottom-confirm finish'
            });
        }
    }

    function toggleProfile(section) {
        switch (section) {
            case 'profile':
                $scope.editProfile = !$scope.editProfile;
                break;
            case 'token':
                $scope.editToken = !$scope.editToken;
                break;
            case 'comm':
                $scope.editCom = !$scope.editCom;
                break;    
            default:
                $scope.editProfile = !$scope.editProfile;
                break;
        }
       
    }

    function changeCom($item, model) {
        switch (model) {
            case 'cartolaCom':
                if ($scope.cartolaCom.indexOf($item) === -1){
                    $scope.cartolaCom.push($item);
                }
                else{
                    const index = $scope.cartolaCom.indexOf($item);
                    $scope.cartolaCom.splice(index,1);

                }
                
                break;
            case 'cartolaEnterprise':
                if ($scope.cartolaEnterprise.indexOf($item) === -1) {
                    $scope.cartolaEnterprise.push($item);
                }
                else {
                    const index = $scope.cartolaEnterprise.indexOf($item);
                    $scope.cartolaEnterprise.splice(index, 1);

                }
                
                break;
            case 'cartolaCredit':
                if ($scope.cartolaCredit.indexOf($item) === -1) {
                    $scope.cartolaCredit.push($item);
                }
                else {
                    const index = $scope.cartolaCredit.indexOf($item);
                    $scope.cartolaCredit.splice(index, 1);
                }                
                break;        
            default:
                break;
        }
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
