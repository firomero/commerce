
export default function KnobDirective() {
	'ngInject';
	
	var directive = {
		restrict: 'AE',
		scope: {
			model: '='
		},
		link: link
	};

	function link(scope, element, attrs, ngModel) {

		$(element).knob({
			'change' : function (v) { console.log(v); }
		});
		$(element).trigger('configure', {
			'min': 0,
			'max': scope.model.total,
			'readOnly': true,
			'fgColor': 'green',
			'width': 100,
			'height': 100,
			'cursor':false
			
		});
		$(element).val(scope.model.rating).trigger('change');
	};

	return directive;
};