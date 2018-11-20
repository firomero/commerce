export default function phoneValidationDirective() {
    'ngInject';

    const directive = {
        require: 'ngModel',
        restrict: 'AC',
        link: link
    };

    const PHONE_REGEXP = /^\+\d{2} \d{2} \d{5}-\d{4}$/;

    function link($scope, $element, $attrs, ctrl) {
        ctrl.$validators.phone = function (modelValue, viewValue) {
            if (ctrl.$isEmpty(modelValue)) {
                // consider empty models to be valid
                return true;
            }

            if (PHONE_REGEXP.test(viewValue)) {
                // it is valid
                return true;
            }

            // it is invalid
            return false;
        };
    }

    return directive;
};
