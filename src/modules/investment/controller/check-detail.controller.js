export default function CheckDetailController($scope, $uibModalInstance, accounts, motivo) {
	'ngInject';

	$scope.close = close;

	function close() { $uibModalInstance.close({'success': true}); }
}
