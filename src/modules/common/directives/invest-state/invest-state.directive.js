export default function investStatusDirective() {
	'ngInject';

	var directive = {
		restrict: 'E',
		template: '<div class="invest-status-container status-container">'+
		'<div class="text {{bClass}}"><span class="{{bClass}}">{{text}}</span></div>'+
		'</div>',
		link: link,
		scope: {
			text: '@',
			bClass: '@',
		}
	};

	function link($scope, $element) {}

	return directive;
};
