export default function CheckDetailController($scope, $uibModalInstance, accounts, motivo, userLogin) {
	'ngInject';

	$scope.accounts = accounts;
	$scope.motivo = motivo;
	$scope.userLogin = userLogin;

	$scope.close = close;

	function close() { $uibModalInstance.close({'success': true}); }
}
