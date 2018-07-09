export default function inputFocusDirective() {

	var directive = {
		restrict: 'AC',
		link: link
	};

	function link($scope, $element, $attrs) {
		
		var inputElement = $element[0].querySelector('.cso-form-glass__input')
		
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