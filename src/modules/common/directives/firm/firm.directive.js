export default function MenuDirective($uibModal, MoneyChangeService) {
	'ngInject';
	
	var directive = {
		restrict: 'E',
		template: '<div class="firm-container">'+
		'<i ng-repeat="item in enabled track by $index" class="material-icons success">brightness_1</i>'+
		'<i ng-repeat="item in disabled track by $index" class="material-icons ">brightness_1</i>'+
		'</div>',
		link: link,
		scope: {
			count: '=',
			total: '='
		}
	};

	function link($scope, $element) {

		$scope.enabled = [];
		$scope.disabled = [];
		for (var i = 0; i < $scope.count; i++) {
			$scope.enabled.push(i);
		  }
		var disabled = $scope.total - $scope.count;
	  
		if (disabled > 0) {
			for (var i = 0; i < disabled; i++) {
				$scope.disabled.push(i);
			}
		}


		angular.element($element).on('click', function(){
			
			var modalInstance = $uibModal.open({
				animation: false,
				template: require('./firm-detail/firm-detail.jade')(),
				controller: 'FirmDetailController',
				controllerAs: '$ctrl',
				size: 'sm',
				windowClass: 'firm-detail'
			});
		  
			modalInstance.result.then(function (response) {
				
				if (response != undefined  && response.success) {
					console.log('asdasd');
				}
			});
		});
	}

	return directive;
};