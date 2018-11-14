export default function AproveDirective($uibModal, MoneyChangeService) {
	'ngInject';
	
	var directive = {
		restrict: 'E',
		template: '<div class="aprove-container">'+
			'<div ng-repeat="item in aprove track by $index" class="icon" ng-class="{\'success\': item.status}">'+
				'<span ng-if="item.status">A</span>'+
				'<span ng-if="!item.status">B</span>'+
			'</div>'+
			'<div class="text" ng-if="valid > aprove.length / 2">'+
				'<span><i class="material-icons">done</i></span>'+
				'<span>Aprobado</span>'+
			'</div>'+
		'</div>',
		link: link,
		scope: {
			aprove: '='
		}
	};

	function link($scope, $element) {

		$scope.valid = 0;
		for(var i = 0; i < $scope.aprove.length; i++) {
			if ($scope.aprove[i].status) {
				$scope.valid++;
			}
		}
		// angular.element($element).on('click', function(){
			
		// 	if ($scope.currentCompany.rol == "APODERADO") {
		// 		var modalInstance = $uibModal.open({
		// 			animation: false,
		// 			template: require('./firm-detail/firm-detail.jade')(),
		// 			controller: 'FirmDetailController',
		// 			controllerAs: '$ctrl',
		// 			size: 'sm',
		// 			windowClass: 'firm-detail',
		// 			resolve: {
		// 				firms: function() {
		// 					return $scope.firm;
		// 				}
		// 			}
		// 		});
			
		// 		modalInstance.result.then(function (response) {
					
		// 			if (response != undefined  && response.success) {
		// 				console.log('asdasd');
		// 			}
		// 		});
		// 	}
		// });
	}

	return directive;
};