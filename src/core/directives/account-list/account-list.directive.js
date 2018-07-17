export default function AccountListDirective() {
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

		$scope.innerDataLeft = [{
			text: "Saldo Contable",
			value: "$500.000.000"
		},{
			text: "Cargos",
			value: "$50.000.000"
		},{
			text: "Retenciones",
			value: "$0"
		},{
			text: "Abonos",
			value: "$76.678.067"
		}];

		$scope.innerDataRight = [{
			text: "Monto Autorizado",
			value: "$500.000.000"
		},{
			text: "Tasa de interés",
			value: "3,5%"
		},{
			text: "Monto Utilizado",
			value: "$440.000.000"
		}];
	}

	return directive;
};