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
		activate();

		function activate() {
			$scope.moneyChange = MoneyChangeService.getMoneyChange();
		}
		
		function showPrice() {			
			this.tooglePrice = !this.tooglePrice;
		}
	
		function toggleDropdown(item) {

			if ($scope.isopen) {
				$scope.isopen = !$scope.isopen;
			}else {
				if ($scope.menuActive == item.text) {
					$scope.isopen = !$scope.isopen;
				}
			}
			
			$scope.menuActive = item.text;
		}

		var inputElement = $element[0].querySelector('.dropdown-menu');
		angular.element(inputElement).on('click', function(e){
			e.stopPropagation();
		});

		$(document).on('click', function(e) {

			console.log(e.target);
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