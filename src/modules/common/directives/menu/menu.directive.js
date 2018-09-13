export default function MenuDirective($uibModal, MoneyChangeService) {
	'ngInject';
	
	var directive = {
		restrict: 'E',
		template: require('./menu.jade')(),
		link: link,
		scope: {
			onToogleSideNav: '&'
		}
	};

	function link($scope, $element, $attrs) {

		$scope.isopen = true;
		$scope.tooglePrice = false;
		$scope.menuActive = 'INICIO';
		$scope.menuItems = [{
			text: 'INICIO', 
			disabled: false
		},{
			text: 'TRANSFERENCIAS',
			disabled: false
		},{
			text: 'PRODUCTOS',
			disabled: false
		}];
		
		$scope.showPrice = showPrice;
		$scope.toggleDropdown = toggleDropdown;
		$scope.newTransference = newTransference;
		$scope.newUser = newUser;
		$scope.$uibModal = $uibModal;
		activate();

		function activate() {
			$scope.moneyChange = MoneyChangeService.getMoneyChange();
		}
		
		function showPrice() {			
			$scope.tooglePrice = !$scope.tooglePrice;
		}
	
		function toggleDropdown(item) {

			if ($scope.isopen) {
				$scope.isopen = !$scope.isopen;
			}else {
				if ($scope.menuActive == item.text) {
					$scope.isopen = !$scope.isopen;
				}
			}
			
			if (!$scope.isopen && $scope.tooglePrice) {
				$scope.tooglePrice = !$scope.tooglePrice;
			}
			$scope.menuActive = item.text;
		}

		function newTransference(type) {
			
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
						return type;
					},
					destinatario: function() {
						return undefined;
					}
				}
			});
			
			// modalInstance.result.then(function (response) {
				
			// 	if (response != undefined  && response.success) {
			// 		// WizardHandler.wizard().reset();
			// 		// $scope.reset();
			// 	}
			// });
		}

		function newUser() {
			
			var modalInstance = $scope.$uibModal.open({
				animation: false,
				template: require('../../../user/view/user-modal.jade')(),
				controller: 'UserModalController',
				controllerAs: '$ctrl',
				size: 'lg',
				windowClass: 'fullscreen'
			});
			
			// modalInstance.result.then(function (response) {
				
			// 	if (response != undefined  && response.success) {
			// 		// WizardHandler.wizard().reset();
			// 		// $scope.reset();
			// 	}
			// });
		}

		var inputElement = $element[0].querySelector('.dropdown-menu');
		angular.element(inputElement).on('click', function(e){
			e.stopPropagation();
		});

		$(document).on('click', function(e) {

			if (e.target.innerText == 'INICIO' || e.target.innerText == 'TRANSFERENCIAS' || e.target.innerText == 'PRODUCTOS') return;

			var item = null;
			for (var i = 0; i < $scope.menuItems.length; i++) {
				if ($scope.menuActive == $scope.menuItems[i].text) {
					item = $scope.menuItems[i];
					break;
				}
			}
			var panel = document.querySelector('.menu-collapse > .collapse.in');
			if (panel) {
				$scope.isopen = true;
				$scope.$apply();
			}
		});
	}

	return directive;
};