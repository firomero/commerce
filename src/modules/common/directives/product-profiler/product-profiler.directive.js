export default function productProfilerDirective() {
	'ngInject';

	const directive = {
		restrict: 'E',
		template: require('./product-profiler.jade')(),
		link: link,
		scope: {
			list: '<',
			title: '@',

		}
	};

	function link($scope, $element, $attrs) {

	}

	return directive;
};
