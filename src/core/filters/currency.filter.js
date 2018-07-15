export default function CurrencyFilter() {
	'ngInject';

	return function(input){
        
        return (input == null) ? 'NAN' : '$' + input;
    };
}