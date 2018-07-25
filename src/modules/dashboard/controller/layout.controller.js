export default function LayoutController(userLogin, $scope, $mdSidenav, $location, UserService) {
    'ngInject';

    $scope.userLogin = userLogin;
    $scope.currentCompany = { nameID: null, name: '', rol: '', accounts: [] };
    $scope.currentAccount = null;
    $scope.currentCompany.nameID = $scope.userLogin.currentCompany;
    $scope.userCompanies = userLogin.companies;
    $scope.activeAccountSelector = false;
    
    $scope.selectCompany = selectCompany;
    $scope.selectAccount = selectAccount;
    $scope.openToggle = openToggle;
    $scope.closeToggle = closeToggle;
    $scope.logout = logout;
    
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
        }
    }

    function selectCompany(company) {
        
        $scope.currentCompany = company;
        if ($scope.currentCompany.accounts.length) {
            $scope.currentAccount = $scope.currentCompany.accounts[0];
        }
        $scope.$broadcast('company::change', {currentCompany: $scope.currentCompany});
    }

    function selectAccount(account) {
        
        $scope.currentAccount = account;
        $scope.$broadcast('account::change', {accountChange: $scope.currentAccount});
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

    $scope.$on('account-selector::view', function(data) {
        
        $scope.activeAccountSelector = data.targetScope.activeAccountSelector && !data.targetScope.isopen;
    });

    $scope.$on('active::account', function(data) {
        
        if (data.targetScope.activeTab)
            $scope.selectAccount(data.targetScope.activeTab);
    });
}
    