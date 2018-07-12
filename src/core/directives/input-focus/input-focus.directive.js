export default function inputFocusDirective() {
	'ngInject';
	
	var directive = {
		restrict: 'AC',
		link: link
	};

	function link($scope, $element, $attrs) {
		var inputElement = $element[0].querySelector($attrs.inputFocus);
		
		if(inputElement){
			angular.element(inputElement).on('focus', function(){
				$element.addClass('is-focused');
			})
		
			angular.element(inputElement).on('blur', function(){
				$element.removeClass('is-focused');
			})
		}
	}

	return directive;
};