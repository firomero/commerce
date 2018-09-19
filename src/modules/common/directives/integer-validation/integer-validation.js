export default function integerValidationDirective() {
	'ngInject';

	const directive = {
		require: 'ngModel',
		restrict: 'AC',
		link: link
	};

	const INTEGER_REGEXP = /^-?\d+$/;

	function link($scope, $element, $attrs, ctrl) {
		ctrl.$validators.integer = function(modelValue, viewValue) {
			if (ctrl.$isEmpty(modelValue)) {
				// consider empty models to be valid
				return true;
			}

			if (INTEGER_REGEXP.test(viewValue)) {
				// it is valid
				return true;
			}

			// it is invalid
			return false;
		};
	}

	return directive;
};
