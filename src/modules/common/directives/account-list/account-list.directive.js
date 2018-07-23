export default function AccountListDirective($rootScope) {
	'ngInject';
	
	var directive = {
		restrict: 'E',
		template: require('./account-list.jade')(),
		link: link,
		scope: {
			list: '<'
		}
	};

	function link($scope, $element, $attrs) {

		for (var i = 0; i < $scope.list.length; i++) {

			if (!$scope.list[i].disabled) {
				var data = $scope.list[i].data;
				$scope.list[i].innerDataLeft = [{
					text: "Saldo Contable",
					value: data.saldo
				},{
					text: "Cargos",
					value: data.cargo
				},{
					text: "Retenciones",
					value: data.retencion
				},{
					text: "Abonos",
					value: data.abonos
				}];
				$scope.list[i].innerDataRight = [{
					text: "Monto Autorizado",
					value: data.autorizado
				},{
					text: "Tasa de interés",
					value: data.interes
				},{
					text: "Monto Utilizado",
					value: data.utilizado
				}];
			}
		}

		$scope.onTabSelected = onTabSelected;


		function onTabSelected(item) {

			$scope.activeTab = item;
			$scope.$emit('active::account');
		}
		
	}

	return directive;
};