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
                        },
                        account: {
                            lastMovement: [{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 100000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Sueldos / Nominas Lorem ipsum dolor set amet',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Sueldos / Nominas Lorem ipsum dolor set amet',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                }
                            ],
                            interes: [{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                }
                            ],
                            historica: [{
                                    year: '2016',
                                    month: 'Mayo',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Mayo',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Abril',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Marzo',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Febrero',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Mayo',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Noviembre',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Mayo',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Mayo',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Mayo',		
                                    folio: '32165498'
                                }
                            ]
                        },
                        credito: {
                            cheques: [{
                                cheque: '123456789000000000',
                                pago: '23-04-2016',		
                                monto: '$100.000',
                                selected: false,
                                completed: true,
                                id: 1
                            },{
                                cheque: '123456789000000000',
                                pago: 'Sin Información',		
                                monto: '$100.000',
                                selected: false,
                                id: 2
                            },{
                                cheque: '123456789000000000',
                                pago: 'Sin Información',		
                                monto: '$100.000',
                                selected: false,
                                id: 3
                            },{
                                cheque: '123456789000000000',
                                pago: 'Sin Información',		
                                monto: '$100.000',
                                selected: false,
                                id: 4
                            },{
                                cheque: '123456789000000000',
                                pago: '23-04-2016',		
                                monto: '$100.000',
                                selected: false,
                                completed: true,
                                id: 5
                            },{
                                cheque: '123456789000000000',
                                pago: '23-04-2016',		
                                monto: '$100.000',
                                selected: false,
                                completed: true,
                                id: 6
                            },{
                                cheque: '123456789000000000',
                                pago: '23-04-2016',		
                                monto: 'Sin Información',
                                selected: false,
                                id: 7
                            },{
                                cheque: '123456789000000000',
                                pago: '23-04-2016',		
                                monto: 'Sin Información',
                                selected: false,
                                id: 8
                            },{
                                cheque: '123456789000000000',
                                pago: '23-04-2016',		
                                monto: 'Sin Información',
                                selected: false,
                                id: 9
                            },{
                                cheque: '123456789000000000',
                                pago: '23-04-2016',		
                                monto: '$900.000',
                                selected: false,
                                completed: true,
                                id: 10
                            }]
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
                        },
                        account: {
                            lastMovement: [{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 100000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Sueldos / Nominas Lorem ipsum dolor set amet',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Sueldos / Nominas Lorem ipsum dolor set amet',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                }
                            ],
                            interes: [{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                }
                            ],
                            historica: [{
                                    year: '2016',
                                    month: 'Mayo',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Mayo',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Abril',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Marzo',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Febrero',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Mayo',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Noviembre',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Mayo',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Mayo',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Mayo',		
                                    folio: '32165498'
                                }
                            ]
                        },
                        credito: {
                            cheques: [{
                                cheque: '123456789000000000',
                                pago: '23-04-2016',		
                                monto: '$100.000',
                                selected: false,
                                completed: true,
                                id: 11
                            },{
                                cheque: '123456789000000000',
                                pago: 'Sin Información',		
                                monto: '$100.000',
                                selected: false,
                                id: 12
                            },{
                                cheque: '123456789000000000',
                                pago: 'Sin Información',		
                                monto: '$100.000',
                                selected: false,
                                id: 13
                            },{
                                cheque: '123456789000000000',
                                pago: 'Sin Información',		
                                monto: '$100.000',
                                selected: false,
                                id: 14
                            },{
                                cheque: '123456789000000000',
                                pago: '23-04-2016',		
                                monto: '$100.000',
                                selected: false,
                                completed: true,
                                id: 15
                            },{
                                cheque: '123456789000000000',
                                pago: '23-04-2016',		
                                monto: '$100.000',
                                selected: false,
                                completed: true,
                                id: 16
                            },{
                                cheque: '123456789000000000',
                                pago: '23-04-2016',		
                                monto: 'Sin Información',
                                selected: false,
                                id: 17
                            },{
                                cheque: '123456789000000000',
                                pago: '23-04-2016',		
                                monto: 'Sin Información',
                                selected: false,
                                id: 18
                            },{
                                cheque: '123456789000000000',
                                pago: '23-04-2016',		
                                monto: 'Sin Información',
                                selected: false,
                                id: 19
                            },{
                                cheque: '123456789000000000',
                                pago: '23-04-2016',		
                                monto: '$900.000',
                                selected: false,
                                completed: true,
                                id: 20
                            }]
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
                        },
                        account: {
                            lastMovement: [{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 100000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Sueldos / Nominas Lorem ipsum dolor set amet',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Sueldos / Nominas Lorem ipsum dolor set amet',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                },{
                                    date: '23-04-2016',
                                    description: 'Abono de Terceros',
                                    serie: '00000000000015',
                                    cargo: 400000,
                                    saldo: '400.000.0000'
                                }
                            ],
                            interes: [{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                },{
                                    date: '23-04-2016',
                                    saldo: '400.000.0000',		
                                    tasa: '0,04',
                                    interes: '400.000'
                                }
                            ],
                            historica: [{
                                    year: '2016',
                                    month: 'Mayo',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Mayo',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Abril',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Marzo',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Febrero',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Mayo',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Noviembre',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Mayo',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Mayo',		
                                    folio: '32165498'
                                },{
                                    year: '2016',
                                    month: 'Mayo',		
                                    folio: '32165498'
                                }
                            ]
                        },
                        credito: {
                            cheques: [{
                                cheque: '123456789000000000',
                                pago: '23-04-2016',		
                                monto: '$100.000',
                                selected: false,
                                completed: true,
                                id: 21
                            },{
                                cheque: '123456789000000000',
                                pago: 'Sin Información',		
                                monto: '$100.000',
                                selected: false,
                                id: 22
                            },{
                                cheque: '123456789000000000',
                                pago: 'Sin Información',		
                                monto: '$100.000',
                                selected: false,
                                id: 23
                            },{
                                cheque: '123456789000000000',
                                pago: 'Sin Información',		
                                monto: '$100.000',
                                selected: false,
                                id: 24
                            },{
                                cheque: '123456789000000000',
                                pago: '23-04-2016',		
                                monto: '$100.000',
                                selected: false,
                                completed: true,
                                id: 25
                            },{
                                cheque: '123456789000000000',
                                pago: '23-04-2016',		
                                monto: '$100.000',
                                selected: false,
                                completed: true,
                                id: 26
                            },{
                                cheque: '123456789000000000',
                                pago: '23-04-2016',		
                                monto: 'Sin Información',
                                selected: false,
                                id: 27
                            },{
                                cheque: '123456789001111000',
                                pago: '23-04-2016',		
                                monto: 'Sin Información',
                                selected: false,
                                id: 28
                            },{
                                cheque: '123456789001111000',
                                pago: '23-04-2016',		
                                monto: 'Sin Información',
                                selected: false,
                                id: 29
                            },{
                                cheque: '123456789001111000',
                                pago: '23-04-2016',		
                                monto: '$900.000',
                                selected: false,
                                completed: true,
                                id: 30
                            }]
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