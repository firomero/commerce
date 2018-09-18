export default function AccountListDirective($rootScope, $state, $uibModal) {
	'ngInject';
	
	var directive = {
		restrict: 'E',
		template: require('./account-list.jade')(),
		link: link,
		scope: {
			list: '<',
			title: '@',
			buttonSaldo: '=',
			buttonTransfer: '=',
			buttonCreditSubmit: '=',
			buttonTransferNew: '=',
			buttonCredit: '=',
			buttonCreditLine: '=',
			buttonCreditLineUp: '='
		}
	};

	function link($scope, $element, $attrs) {

		if ($scope.title == undefined) { $scope.title = 'Cuentas Disponibles'; }
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
		
		$scope.$uibModal = $uibModal;
		$scope.onTabSelected = onTabSelected;
		$scope.newTransference = newTransference;
		$scope.goTo = goTo;	
		
		function onTabSelected(item) {

			$scope.$emit('account::change', item);
		}

		function newTransference() {
			
			var modalInstance = $scope.$uibModal.open({
				animation: false,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				template: require('../../../transfer/view/transfer-modal.jade')(),
				controller: 'TransferModalController',
				controllerAs: '$ctrl',
				size: 'lg',
				windowClass: 'fullscreen',
				resolve: {
					action: function() {
						return 'NEW_TRANSFER';
					},
					destinatario: function() {
						return undefined;
					}
				}
			});
		}

		function goTo(state) {
			
			switch(state) {
				case 'account': 
					$state.go('app.investment', {id: 'account'})
					break;
				default:
					break;
			}
		}
	}

	return directive;
};