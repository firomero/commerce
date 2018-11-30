export default function productProfilerDirective($uibModal) {
	'ngInject';


	const directive = {
		restrict: 'E',
		template: require('./product-profiler.jade')(),
		link: link,
		scope: {
			list: '<',
			title: '@',

		}
	};

	function link($scope, $element, $attrs) {

		$scope.$uibModal = $uibModal;
		$scope.requestProduct = requestProduct;

		function requestProduct(){
			var modalInstance = $scope.$uibModal.open({
				animation: false,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				template: require('../../../product/view/product-modal.jade')(),
				controller: 'ProductModalController',
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
	}


	return directive;
};
