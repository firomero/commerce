export default function MenuDirective($uibModal, MoneyChangeService) {
	'ngInject';
	
	var directive = {
		restrict: 'E',
		template: '<div class="firm-container" ng-class="{\'pointer\': currentCompany.rol == \'APODERADO\'}">'+
		'<i ng-repeat="item in firm track by $index" class="material-icons" ng-class="{\'success\': item.status == true}">brightness_1</i>'+
		'</div>',
		link: link,
		scope: {
			firm: '=',
			currentCompany: '='
		}
	};

	function link($scope, $element) {

		angular.element($element).on('click', function(){
			
			if ($scope.currentCompany.rol == "APODERADO") {
				var modalInstance = $uibModal.open({
					animation: false,
					template: require('./firm-detail/firm-detail.jade')(),
					controller: 'FirmDetailController',
					controllerAs: '$ctrl',
					size: 'sm',
					windowClass: 'firm-detail',
					resolve: {
						firms: function() {
							return $scope.firm;
						}
					}
				});
			
				modalInstance.result.then(function (response) {
					
					if (response != undefined  && response.success) {
						console.log('asdasd');
					}
				});
			}
		});
	}

	return directive;
};