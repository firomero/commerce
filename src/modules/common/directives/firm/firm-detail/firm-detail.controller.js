export default function FirmDetailController($scope, $timeout, $uibModal, $uibModalInstance, firms, currentCompany) {
	'ngInject';

	$scope.firms = firms;
	$scope.currentCompany = currentCompany;
	$scope.close = close;

	function close() {
		
		$uibModalInstance.close();
	}
}