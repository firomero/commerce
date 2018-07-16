export default function inputFocusDirective() {
	'ngInject';
	
	var directive = {
		restrict: 'AC',
		link: link
	};

	function link($scope, $element, $attrs) {
		var inputElement = $element[0].querySelector($attrs.inputFocus);

		var focusClass = 'is-focused';
		if ($attrs.focusClass != undefined) {
			focusClass = $attrs.focusClass;
		}
		
		if(inputElement){
			angular.element(inputElement).on('focus', function(){
				$element.addClass(focusClass);
			})
		
			angular.element(inputElement).on('blur', function(){
				$element.removeClass(focusClass);
			})
		}
	}

	return directive;
};