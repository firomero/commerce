export default function LayoutController(userLogin, $scope, $mdSidenav, UserService) {
    'ngInject';

    $scope.userLogin = userLogin;
    $scope.currentCompany = { nameID: null, name: '', rol: '', accounts: [] };
    $scope.currentCompany.nameID = $scope.userLogin.currentCompany;
    $scope.userCompanies = userLogin.companies;
    
    $scope.selectCompany = selectCompany;
    $scope.openToggle = openToggle;
    $scope.closeToggle = closeToggle;
    
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
    }

    function selectCompany(company) {
        
        $scope.currentCompany = company;
        $scope.$broadcast('account::change', {currentCompany: $scope.currentCompany});
    }

    function openToggle() {
        
        $mdSidenav('right').toggle();
    }
        
    function closeToggle() {
        
        $mdSidenav('right').close();
    }
}
    