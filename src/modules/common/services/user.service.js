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
                        disabled: false,
                        data: {
                            montoD: '$500.503.000',
                            creditoD: '$60.000.000',
                            saldo: '$500.000.000',
                            retencion: '$0',
                            cargo: '$50.000.000',
                            abonos: '$76.678.067',
                            autorizado: '$500.000.000',
                            utilizado: '$400.000.000',
                            interes: '3,5%'
                        }
                    },{
                        name: '5678',
                        disabled: false,
                        data: {
                            montoD: '$100.003.000',
                            creditoD: '$40.100.000',
                            saldo: '$20.000.000',
                            retencion: '$100',
                            cargo: '$300.000',
                            abonos: '$678.067',
                            autorizado: '$10.000.000',
                            utilizado: '$900.000',
                            interes: '3,5%'
                        }
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
                    accounts: [{
                        name: '8723',
                        disabled: false,
                        data: {
                            montoD: '$503.000',
                            creditoD: '$1.000',
                            saldo: '$900',
                            retencion: '$0',
                            cargo: '$100.000',
                            abonos: '$78.067',
                            autorizado: '$10.000',
                            utilizado: '$40.000.000',
                            interes: '3,5%'
                        }
                    },{
                        name: '9001',
                        disabled: true
                    }]
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