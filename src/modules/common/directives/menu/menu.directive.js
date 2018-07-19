export default function MenuDirective(MoneyChangeService) {
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

		$scope.isopen = false;
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
		activate();

		function activate() {
			$scope.moneyChange = MoneyChangeService.getMoneyChange();
		}
		
		function showPrice() {			
			this.tooglePrice = !this.tooglePrice;
		}
	
		function toggleDropdown($event, item) {

			$event.preventDefault();
			$event.stopPropagation();
			if (!$scope.isopen) {
				$scope.isopen = !$scope.isopen;
			}
			
			$scope.menuActive = item.text;
			$scope.activeAccountSelector = ($scope.menuActive == 'TRANSFERENCIAS' || $scope.menuActive == 'PRODUCTOS') && $scope.isopen ? true : false;
			$scope.$emit('account-selector::view');
		}

		$scope.$watch('isopen', function(e) {
			$scope.$emit('account-selector::view');
		});

		var inputElement = $element[0].querySelector('.dropdown-menu');
		angular.element(inputElement).on('click', function(e){
			e.stopPropagation();
		});
	}

	return directive;
};