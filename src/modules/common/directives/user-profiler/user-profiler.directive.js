export default function userProfilerDirective() {
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

	}

	return directive;
};
