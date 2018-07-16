export default function HeaderDirective() {
	'ngInject';
	
	var directive = {
		restrict: 'E',
		template: require('./header.jade')(),
		link: link,
		scope: {
			onToogleSideNav: '&'
		}
	};

	function link($scope, $element, $attrs) {}

	return directive;
};