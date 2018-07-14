export default class CompanyService {
    
    constructor($resource, $http, $q) {
		'ngInject';

        this.$resource = $resource;
        this.$http = $http;
        this.$q = $q;

        this.companies = [{
            name: 'Kimberly Clark Chile S.A',
            nameID: 'KIMBERLY'
        },{
            name: 'Transbank S.A',
            nameID: 'TRANSBANK'
        },{
            name: 'Coca-Cola de Chicle S.A',
            nameID: 'COCACOLA'
        },{
            name: 'Fallabela',
            nameID: 'FALLABELA'
        },{
            name: 'Homy',
            nameID: 'HOMY'
        }];

        localStorage.setItem('companies', JSON.stringify(this.companies));
	}
    
    getCompanies() {

        return JSON.parse(localStorage.getItem('companies'))
    };
}