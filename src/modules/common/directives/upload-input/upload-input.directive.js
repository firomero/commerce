export default function UploadInputDirective() {
	'ngInject';
	
	var directive = {
		restrict: 'E',
		template: '<div class="form-element">'+
			'<div class="form-element-right">'+
				'<span>{{fileName}}</span>'+
				'<span><i class="material-icons">cloud_download</i></span>'+
			'</div>'+
			'<input id="uploadFileInput" name="upload" type="file" />'+
		'</div>',
		replace: true,
		link: link
	};

	function link($scope, $element, $attrs) {
		
		$scope.fileName = "Examinar";
		$element.on('change', function(e){
			$scope.$apply(function () {
				$scope.fileName = document.getElementById('uploadFileInput').files[0].name;
			});
		});
	}

	return directive;
};