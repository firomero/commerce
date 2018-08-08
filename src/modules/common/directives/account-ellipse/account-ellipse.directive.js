export default function AccountEllipseDirective() {
	'ngInject';
	
	var directive = {
		restrict: 'E',
		template: '<div class="account-ellipse-container" ng-if="!isEmpty">'+
			'<span>Nº {{firstAccount}}</span>'+
			'<span ng-if="cant >= 1"><a class="pointer">y {{cant}} Cuenta(s) más</a></span>'+
		'</div>',
		link: link,
		scope: {
			accounts: '=',
			link: '@'
		}
	};

	function link($scope, $element) {

		$scope.isEmpty = false;
		$scope.cant = 0;
		if ($scope.accounts.length) {

			$scope.firstAccount = $scope.accounts.shift();
			if ($scope.accounts.length) {
				$scope.cant = $scope.accounts.length;
			}
		}else {
			$scope.isEmpty = true;
		}
	}

	return directive;
};