// import Knob from 'knob';

export default function KnobDirective() {
	'ngInject';
	
	var directive = {
		restrict: 'AC',
		link: link
	};

	function link($scope, $element, $attrs) {

		// var knob = new Knob({
		// 	label: 'Test 123',
		// 	value: 100,
		// 	angleOffset: -125,
		// 	angleArc: 250,
		// 	min: 0,
		// 	max: 200,
		// 	width: 100
		// });
		  
		// $element[0].appendChild(knob)
	}

	return directive;
};