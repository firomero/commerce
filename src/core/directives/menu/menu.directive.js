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
		$scope.state = false;
		$scope.tooglePrice = false;
		$scope.menuActive = '';
		$scope.menuItems = [{
			text: 'INICIO', 
			disabled: false
		},{
			text: 'TRANSFERENCIAS',
			disabled: false
		},{
			text: 'PRODUCTOS',
			disabled: true
		},{	
			text: 'DOCUMENTOS',
			disabled: true
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

			if ($scope.menuActive != item.text && !$scope.state) {
				$scope.isopen = !$scope.isopen;
				$scope.state = $scope.isopen;
			}
			
			$scope.menuActive = item.text;
		}
	}

	return directive;
};