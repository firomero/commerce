export default function mailValidationDirective() {
    'ngInject';

    const directive = {
        require: 'ngModel',
        restrict: 'AC',
        link: link
    };

    const MAIL_REGEXP = /^(.+\@.+\..+)$/;

    function link($scope, $element, $attrs, ctrl) {
        ctrl.$validators.mail = function (modelValue, viewValue) {
            if (ctrl.$isEmpty(modelValue)) {
                // consider empty models to be valid
                return true;
            }

            if (MAIL_REGEXP.test(viewValue)) {
                // it is valid
                return true;
            }

            // it is invalid
            return false;
        };
    }

    return directive;
};
