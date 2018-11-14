export default class ContactService {
    
    constructor($resource, $http, $q) {
		'ngInject';

        this.$resource = $resource;
        this.$http = $http;
        this.$q = $q;

        this.contacts = [{
            id: 1,
            name: 'Angeles',
            lastName: 'Forteza',
            dni: '1111111-1',
            mail: 'angeles@forteza.cl',
            alias: 'La chica',
            avatar: 'assets/images/demo-clients/angeles-forteza.png'
            },
            {
            id: 2,
            name: 'Claudio',
            lastName: 'Carrizo',
            dni: '1111111-1',
            mail: 'claudio@mail.com',
            alias: 'Guatón carrizo',
            avatar: 'assets/images/demo-clients/claudio-carrizo.png'
        },{
            id: 3,
            name: 'Alfonso',
            lastName: 'Deneken',
            dni: '1111111-1',
            mail: 'alfonso@mail.com',
            alias: 'Pescado',
            avatar: 'assets/images/demo-clients/alfonso-deneken.png'
        },{
            id: 4,
            name: 'Mamma Lucia',
            lastName: 'Cafe',
            dni: '1111111-1',
            mail: 'lucia@mail.com',
            alias: null,
            avatar: 'assets/images/demo-clients/lucia-cafe.png'
        },{
            id: 5,
            name: 'Montserrat',
            lastName: 'Barceló',
            dni: '1111111-1',
            mail: 'mbarcelo@mail.com',
            alias: 'Flaca',
            avatar: 'assets/images/demo-clients/montserrat-barcelo.png'
        }];

        localStorage.setItem('contacts', JSON.stringify(this.contacts));

        this.contact_accounts = [{
            id: 1,
            contactId: 1,
            bank:{
            shortName: 'BCI', 
            name: 'Banco de crédito e inversiones',
            id: 2
            },
            number: '2402201212',
            type: 'corriente',
        },{
            id: 2,
            contactId: 1,
            bank: {
            shortName: 'Consorcio',
            name: 'Banco Consorcio',
            id: 3
            },
            number: '240539343',
            type: 'vista',
        },{
            id: 3,
            contactId: 2,
            bank:{
            shortName: 'Falabella',
            name: 'Banco Falabella',
            id: 5
            },
            number: '0004548493',
            type: 'corriente',
        },{
            id: 4,
            contactId: 3,
            bank:{
            shortName: 'Chile',
            name: 'Banco de chile',
            id: 6
            },
            number: '00069834834',
            type: 'corriente',
        },{
            id: 5,
            contactId: 4,
            bank:{
            shortName: 'Consorcio',
            name: 'Banco Consorcio',
            id: 3
            },
            number: '6455494592',
            type: 'corriente',
        },{
            id: 6,
            contactId: 5,
            bank:{
            shortName: 'BCI', 
            name: 'Banco de crédito e inversiones',
            id: 2
            },
            number: '0023723472',
            type: 'corriente',
        },{
            id: 7,
            contactId: 5,
            bank:{
            shortName: 'Santander',
            name: 'Banco Santander',
            id: 1
            },
            number: '0006987347',
            type: 'corriente',
        },{
            id: 8,
            contactId: 1,
            bank:{
            shortName: 'Estado', 
            name: 'Banco estadio',
            id: 4
            },
            number: '16233575',
            type: 'vista',
        }];

        localStorage.setItem('contact_accounts', JSON.stringify(this.contact_accounts));
	}
    
    getContacts() {

        return JSON.parse(localStorage.getItem('contacts'))
    };

    getContactAccounts() {
        
        return JSON.parse(localStorage.getItem('contact_accounts'))
    };
}