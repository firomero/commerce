export default function FirmDetailController($scope, $timeout, $uibModal, $uibModalInstance, firms) {
	'ngInject';

	$scope.firms = firms;
	$scope.close = close;

	function close() {
		
		$uibModalInstance.close();
	}
}