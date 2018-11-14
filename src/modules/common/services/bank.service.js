export default class BankService {
    
    constructor($resource, $http, $q) {
		'ngInject';

        this.$resource = $resource;
        this.$http = $http;
        this.$q = $q;

        this.banks = [{
            shortName: 'Santander',
            name: 'Banco Santander',
            id: 1
        },{
            shortName: 'BCI', 
            name: 'Banco de crédito e inversiones',
            id: 2
        },{
            shortName: 'Consorcio',
            name: 'Banco Consorcio',
            id: 3
        },{
            shortName: 'Scotiabank',
            name: 'Scotiabank',
            id: 4
        },{
            shortName: 'Falabella',
            name: 'Banco Falabella',
            id: 5
        },{
            shortName: 'Chile',
            name: 'Banco de chile',
            id: 6
        }];

        localStorage.setItem('banks', JSON.stringify(this.banks));
	}
    
    getBanks() {

        return JSON.parse(localStorage.getItem('banks'))
    };
}