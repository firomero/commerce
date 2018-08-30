export default function StatusDirective($uibModal) {
	'ngInject';
	
	var directive = {
		restrict: 'E',
		template: '<div class="status-container">'+
			'<div class="icon {{bClass}}"><span>{{icon}}</span></div>'+
			'<div class="text">{{text}}</div>'+
		'</div>',
		link: link,
		scope: {
			icon: '@',
			text: '@',
			bClass: '@',
			rol: '='
		}
	};

	function link($scope, $element) {

		// angular.element($element).on('click', function(){
			
		// 	var modalInstance = $uibModal.open({
		// 		animation: false,
		// 		template: require('./status-detail/status-detail.jade')(),
		// 		controller: 'StatusDetailController',
		// 		controllerAs: '$ctrl',
		// 		size: 'sm',
		// 		windowClass: 'status-detail'
		// 	});
		  
		// 	modalInstance.result.then(function (response) {
				
		// 		if (response != undefined  && response.success) {
		// 			console.log('asdasd');
		// 		}
		// 	});
		// });
	}

	return directive;
};