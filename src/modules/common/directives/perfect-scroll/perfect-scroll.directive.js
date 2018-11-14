import PerfectScrollbar from 'perfect-scrollbar';

export default function perfectScrollDirective() {
	'ngInject';
	
	var directive = {
		restrict: 'AC',
		link: link
	};

	function link($scope, $element, $attrs) {
		
		this.ps = new PerfectScrollbar($element[0], {
			wheelSpeed: 1,
			wheelPropagation: true,
			minScrollbarLength: 20,
			suppressScrollX: true
		});
	}

	return directive;
};