export default function userProfilerDirective($uibModal, $timeout) {
	'ngInject';

	const directive = {
		restrict: 'E',
		template: require('./user-profiler.jade')(),
		link: link,
		scope: {
			list: '<',
			rating: '<',
			title: '@',

		}
	};

	function link($scope, $element, $attrs) {

		$scope.newUser = newUser;
		$scope.$uibModal = $uibModal;

		function newUser() {

			const modalInstance = $scope.$uibModal.open({
				animation: false,
				template: require('../../../user/view/user-modal.jade')(),
				controller: 'UserModalController',
				controllerAs: '$ctrl',
				size: 'lg',
				windowClass: 'fullscreen'
			});

			modalInstance.result.then(() => {
				let message = "Estimado Juan Pablo El Apoderado Marcelo se ha creado correctamente, Se ha enviado un respaldo a tu correo jor****@gmail.com";
				let confirmInstance = $uibModal.open({
					ariaDescribedBy: 'modal-body',
					template: require('../../components/message-confirm/message-confirm-two-action.jade')(),
					controller: 'MessageConfirmController',
					controllerAs: '$ctrl',
					size: 'lg',
					backdrop: 'static',
					keyboard  : false,
					resolve: {
						message: () => message,
						textPrimaryAction: () => 'ACEPTAR',
						textAction: () => 'CREAR OTRO USUARIO'
					},
					windowClass: 'bottom-confirm finish'
				});
				confirmInstance.result.then((response) =>
				{
					$timeout(() => {
						if (response.action === 'secundary')
						{
							newUser();
						}
					},1000)
				});
			});
		}

	}

	return directive;
};
