export default class UserService {
    
    constructor($resource, $http, $q) {
		'ngInject';

        this.$resource = $resource;
        this.$http = $http;
        this.$q = $q;

        this.user = {
            username: 'Juan Pablos',
            rut: '10.456.789-0',
            password: '****************',
            currentCompany: '',
            companies: [{
                    rol: '',
                    nameID: 'KIMBERLY'
                },{
                    rol: '',
                    nameID: 'TRANSBANK'
                },{
                    rol: '',
                    nameID: 'COCACOLA'
            }]
        };
        
        localStorage.setItem('user', JSON.stringify(this.user));
	}
    
    login() {

        return JSON.parse(localStorage.getItem('user'))
    };
}