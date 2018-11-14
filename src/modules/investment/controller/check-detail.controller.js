export default function CheckDetailController($scope, $uibModalInstance, accounts, motivo, userLogin) {
	'ngInject';

	var self = this;
	self.accounts = accounts;
	$scope.motivo = motivo;
	$scope.userLogin = userLogin;
	$scope.date = new Date();

	$scope.close = close;

	function close() { $uibModalInstance.close({'success': true}); }
}
