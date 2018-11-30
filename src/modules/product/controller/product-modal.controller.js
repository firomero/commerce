export default function ProductModalController($scope, $uibModal, $uibModalInstance) {
	'ngInject';
	$scope.close = close;

	function close() {

		$uibModalInstance.dismiss();
	}
}
