export default function StatusDetailController($scope, $timeout, $uibModal, $uibModalInstance) {
	'ngInject';

	$scope.close = close;

	function close() {
		
		$uibModalInstance.close();
	}
}
