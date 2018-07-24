export default function autoFocusDirective($timeout) {
	'ngInject';
	
	var directive = {
		restrict: 'AC',
		link: link
	};

	function link($scope, $element, $attrs) {
		$timeout(function(){
            $element[0].focus();
        }, 0);
	}

	return directive;
};