export default class LayoutController {
    
    constructor(userLogin, $scope, $mdSidenav, UserService) {
        'ngInject';
        $scope.$mdSidenav = $mdSidenav;
        $scope.userLogin = userLogin;
        $scope.currentCompany = { nameID: null, name: '', rol: '', accounts: [] };
        $scope.currentCompany.nameID = $scope.userLogin.currentCompany;

        $scope.userCompanies = userLogin.companies;
        
        for(var i = 0;i < $scope.userCompanies.length;i++) {

            if ($scope.userCompanies[i].nameID == $scope.currentCompany.nameID) {
                $scope.currentCompany.rol = $scope.userCompanies[i].rol;
                $scope.currentCompany.name = $scope.userCompanies[i].name;
                $scope.currentCompany.accounts = $scope.userCompanies[i].accounts;
                break;
            }
        }

        $scope.selectCompany = function(company) {
            
            // this.loadAccounts = true;
            $scope.currentCompany = company;
            // this.loadAccounts = false;
            $scope.$broadcast('account::change', {currentCompany: this.currentCompany});
        };
    }

    $onInit = () => {

        
    };

    selectCompany(company) {
        
        // this.loadAccounts = true;
        $scope.currentCompany = company;
        // this.loadAccounts = false;
        $scope.$broadcast('account::change', {currentCompany: this.currentCompany});
    }

    openToggle() {
        
        $scope.$mdSidenav('right').toggle();
    }
        
    closeToggle() {
        
        $scope.$mdSidenav('right').close();
    }
}
    