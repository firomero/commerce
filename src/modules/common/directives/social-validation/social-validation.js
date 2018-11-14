export default function socialValidationDirective() {
    'ngInject';

    const directive = {
        require: 'ngModel',
        restrict: 'AC',
        link: link
    };

    const SOCIAL_REGEXP = /^[a-z][a-z0-9\.]{3,100}$/i;

    function link($scope, $element, $attrs, ctrl) {
        ctrl.$validators.social = function (modelValue, viewValue) {
            if (ctrl.$isEmpty(modelValue)) {
                // consider empty models to be valid
                return true;
            }

            if (SOCIAL_REGEXP.test(viewValue)) {
                // it is valid
                return true;
            }

            // it is invalid
            return false;
        };
    }

    return directive;
};
