export default class UserService {
    
    constructor($resource, $http, $q) {
		'ngInject';

        this.$resource = $resource;
        this.$http = $http;
        this.$q = $q;

        this.user = {
            username: 'Juan Pablos',
            fullName: 'Juan Pablos Rojas Contreras',
            rut: '10.456.789-0',
            password: '****************',
            currentCompany: '',
            companies: [{
                    rol: 'APODERADO',
                    name: 'Kimberly Clark Chile S.A',
                    nameID: 'KIMBERLY',
                    accounts: [{
                        name: '1234',
                        disabled: false
                    },{
                        name: '5678',
                        disabled: true
                    },{
                        name: '9012',
                        disabled: true
                    },{
                        name: '3456',
                        disabled: true
                    }]
                },{
                    rol: 'OPERADOR',
                    name: 'Transbank S.A',
                    nameID: 'TRANSBANK',
                    accounts: []
                },{
                    rol: 'APODERADO',
                    name: 'Coca-Cola de Chicle S.A',
                    nameID: 'COCACOLA',
                    accounts: []
            }]
        };
        
        localStorage.setItem('user', JSON.stringify(this.user));
	}
    
    login() {

        return JSON.parse(localStorage.getItem('user'));
    };

    userLogin() {
        
        return JSON.parse(localStorage.getItem('userLogin'));
    };
}