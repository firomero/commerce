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
				accounts: [
					{
						name: '1234',
						disabled: false,
						resumen: {
							saldo: '110.311.270',
							credito: '50.000.000',
							transferencias: '160.311.720'
						},
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
							lastMovement: [
								{
								date: '23-04-2016',
								description: 'Abono de Terceros',
								serie: '00000000000015',
								cargo: 100000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Abono de Terceros',
								serie: '00000000000015',
								cargo: 400000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Abono de Terceros',
								serie: '00000000000015',
								cargo: 400000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Sueldos / Nominas Lorem ipsum dolor set amet',
								serie: '00000000000015',
								cargo: 400000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Abono de Terceros',
								serie: '00000000000015',
								cargo: 400000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Abono de Terceros',
								serie: '00000000000015',
								cargo: 400000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Sueldos / Nominas Lorem ipsum dolor set amet',
								serie: '00000000000015',
								cargo: 400000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Abono de Terceros',
								serie: '00000000000015',
								cargo: 400000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Abono de Terceros',
								serie: '00000000000015',
								cargo: 400000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Abono de Terceros',
								serie: '00000000000015',
								cargo: 400000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Abono de Terceros',
								serie: '00000000000015',
								cargo: 100000,
								saldo: '400.000.0000'
							}, {
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
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}
							],
							historica: [{
								year: '2016',
								month: 'Mayo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'C',
											class: 'red',
											text: 'Cancelado',
											nameKey: 'CANCELADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'C',
											class: 'red',
											text: 'Cancelado',
											nameKey: 'CANCELADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'C',
											class: 'red',
											text: 'Cancelado',
											nameKey: 'CANCELADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							}, {
								year: '2016',
								month: 'Mayo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							}, {
								year: '2016',
								month: 'Abril',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							}, {
								year: '2016',
								month: 'Marzo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							}, {
								year: '2016',
								month: 'Febrero',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							}, {
								year: '2016',
								month: 'Mayo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							}, {
								year: '2016',
								month: 'Noviembre',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							}, {
								year: '2016',
								month: 'Mayo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							}, {
								year: '2016',
								month: 'Mayo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							}, {
								year: '2016',
								month: 'Mayo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							}, {
								year: '2016',
								month: 'Mayo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							}, {
								year: '2016',
								month: 'Mayo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
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
							}, {
								cheque: '123456789000000000',
								pago: 'Sin Información',
								monto: '$100.000',
								selected: false,
								id: 2
							}, {
								cheque: '123456789000000000',
								pago: 'Sin Información',
								monto: '$100.000',
								selected: false,
								id: 3
							}, {
								cheque: '123456789000000000',
								pago: 'Sin Información',
								monto: '$100.000',
								selected: false,
								id: 4
							}, {
								cheque: '123456789000000000',
								pago: '23-04-2016',
								monto: '$100.000',
								selected: false,
								completed: true,
								id: 5
							}, {
								cheque: '123456789000000000',
								pago: '23-04-2016',
								monto: '$100.000',
								selected: false,
								completed: true,
								id: 6
							}, {
								cheque: '123456789000000000',
								pago: '23-04-2016',
								monto: 'Sin Información',
								selected: false,
								id: 7
							}, {
								cheque: '123456789000000000',
								pago: '23-04-2016',
								monto: 'Sin Información',
								selected: false,
								id: 8
							}, {
								cheque: '123456789000000000',
								pago: '23-04-2016',
								monto: 'Sin Información',
								selected: false,
								id: 9
							}, {
								cheque: '123456789000000000',
								pago: '23-04-2016',
								monto: '$900.000',
								selected: false,
								completed: true,
								id: 10
							}, {
								cheque: '123456789000000000',
								pago: '23-04-2016',
								monto: '$100.000',
								selected: false,
								completed: true,
								id: 23
							}, {
								cheque: '123456789000000000',
								pago: 'Sin Información',
								monto: '$100.000',
								selected: false,
								id: 24
							}]
						},
						transferencias: {
							estados: [
								{
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Alto Monto',
									origen: '32165498',
									destinatario: 'Empresa de Transportes Rurales Limitada',
									transferencia: '$400.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: true
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: false
									}, {
										name: 'Marcela Acevedo. P',
										status: false
									}],
									firmTotal: 2,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								},
								{
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Alto Monto',
									origen: '32165498',
									destinatario: 'Administradora de Supermercados Hiper Limitada',
									transferencia: '$400.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: true
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: true
									}, {
										name: 'Marcela Acevedo. P',
										status: false
									}],
									firmTotal: 3,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								},
								{
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Alto Monto',
									origen: '32165498',
									destinatario: 'Empresa de Transportes Rurales Limitada',
									transferencia: '$400.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: false
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: false
									}, {
										name: 'Marcela Acevedo. P',
										status: false
									}],
									firmTotal: 1,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								},
								{
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Pagos Masivos',
									origen: '32165498',
									destinatario: 'Administradora de Supermercados Hiper Limitada',
									transferencia: '$1.023.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: true
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: true
									}, {
										name: 'Marcela Acevedo. P',
										status: false
									}],
									firmTotal: 3,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								},
								{
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Alto Monto',
									origen: '32165498',
									destinatario: 'Empresa de Transportes Rurales Limitada',
									transferencia: '$450.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: true
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: true
									}, {
										name: 'Marcela Acevedo. P',
										status: true
									}],
									firmTotal: 4,
									estado: {
										icon: 'A',
										class: 'green',
										text: 'Aprobada',
										nameKey: 'APROBADA'
									}
								},
								{
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Alto Monto',
									origen: '32165498',
									destinatario: 'Empresa de Transportes Rurales Limitada',
									transferencia: '$400.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: true
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: true
									}, {
										name: 'Marcela Acevedo. P',
										status: false
									}],
									firmTotal: 3,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								},
								{
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Pagos Masivos',
									origen: '32165498',
									destinatario: 'Empresa de Transportes Rurales Limitada',
									transferencia: '$400.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: true
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: true
									}, {
										name: 'Marcela Acevedo. P',
										status: false
									}],
									firmTotal: 3,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								},
								{
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Alto Monto',
									origen: '32165498',
									destinatario: 'Empresa de Transportes Rurales Limitada',
									transferencia: '$400.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: true
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: false
									}, {
										name: 'Marcela Acevedo. P',
										status: false
									}],
									firmTotal: 2,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								},
								{
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Alto Monto',
									origen: '32165498',
									destinatario: 'Empresa de Transportes Rurales Limitada',
									transferencia: '$400.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: true
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: false
									}, {
										name: 'Marcela Acevedo. P',
										status: false
									}],
									firmTotal: 2,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								},
								{
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Pagos Masivos',
									origen: '32165498',
									destinatario: 'Empresa de Transportes Rurales Limitada',
									transferencia: '$400.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: true
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: true
									}, {
										name: 'Marcela Acevedo. P',
										status: false
									}],
									firmTotal: 3,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								},
								{
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Alto Monto',
									origen: '32165498',
									destinatario: 'Empresa de Transportes Rurales Limitada',
									transferencia: '$400.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: true
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: false
									}, {
										name: 'Marcela Acevedo. P',
										status: false
									}],
									firmTotal: 2,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								},
								{
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Alto Monto',
									origen: '32165498',
									destinatario: 'Administradora de Supermercados Hiper Limitada',
									transferencia: '$400.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: true
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: true
									}, {
										name: 'Marcela Acevedo. P',
										status: false
									}],
									firmTotal: 3,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								}
							],
							destinatarios: [{
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									tipo: ''
								}
								],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'A',
									class: 'green',
									text: 'Activo',
									nameKey: 'ACTIVO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Crédito e Inversiones',
									accounts: [{
										banco: 'Banco de Crédito e Inversiones',
										account: '2403350100000000',
										type: {id: 1, name: "Cuenta Corriente"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 2, name: "Cuenta Vista"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Juan Arrigadad',
									mail: 'juan@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									type: {id: 2, name: "Cuenta Vista"}
								}, {
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									type: {id: 1, name: "Cuenta Corriente"}
								}],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'A',
									class: 'green',
									text: 'Activo',
									nameKey: 'ACTIVO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Crédito e Inversiones',
									accounts: [{
										banco: 'Banco de Crédito e Inversiones',
										account: '2403350100000000',
										type: {id: 1, name: "Cuenta Corriente"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									type: {id: 2, name: "Cuenta Vista"}
								}],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'P',
									class: 'orage',
									text: 'Pendiente Autorización',
									nameKey: 'AUTORIZADO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Crédito e Inversiones',
									accounts: [{
										banco: 'Banco de Crédito e Inversiones',
										account: '2403350100000000',
										type: {id: 1, name: "Cuenta Corriente"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 2, name: "Cuenta Vista"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 2, name: "Cuenta Vista"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'P',
									class: 'orage',
									text: 'Pendiente Autorización',
									nameKey: 'AUTORIZADO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Crédito e Inversiones',
									accounts: [{
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									type: {id: 1, name: "Cuenta Corriente"}
								}],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'A',
									class: 'green',
									text: 'Activo',
									nameKey: 'ACTIVO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Crédito e Inversiones',
									accounts: [{
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									type: {id: 1, name: "Cuenta Corriente"}
								}],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'A',
									class: 'green',
									text: 'Activo',
									nameKey: 'ACTIVO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco itau',
									accounts: [{
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									type: {id: 1, name: "Cuenta Corriente"}
								}],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'A',
									class: 'green',
									text: 'Activo',
									nameKey: 'ACTIVO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Crédito e Inversiones',
									accounts: [{
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: ''
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									type: {id: 1, name: "Cuenta Corriente"}
								}],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'P',
									class: 'orage',
									text: 'Pendiente Autorización',
									nameKey: 'AUTORIZADO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco itau',
									accounts: [{
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 3, name: "Cuenta Electrónica"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									tipo: ''
								}],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'P',
									class: 'orage',
									text: 'Pendiente Autorización',
									nameKey: 'AUTORIZADO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Chile / Edwards',
									accounts: [{
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 2, name: "Cuenta Vista"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'A',
									class: 'green',
									text: 'Activo',
									nameKey: 'ACTIVO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Chile / Edwards',
									accounts: [{
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 3, name: "Cuenta Electrónica"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									type: {id: 1, name: "Cuenta Corriente"}
								}
								],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'A',
									class: 'green',
									text: 'Activo',
									nameKey: 'ACTIVO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Crédito e Inversiones',
									accounts: [{
										banco: 'Banco de Crédito e Inversiones',
										account: '2403350100000000',
										type: {id: 3, name: "Cuenta Electrónica"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 3, name: "Cuenta Electrónica"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									type: {id: 2, name: "Cuenta Vista"}
								}, {
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									type: {id: 1, name: "Cuenta Corriente"}
								}],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'A',
									class: 'green',
									text: 'Activo',
									nameKey: 'ACTIVO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Crédito e Inversiones',
									accounts: [{
										banco: 'Banco de Crédito e Inversiones',
										account: '2403350100000000',
										type: {id: 1, name: "Cuenta Corriente"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}
							],
							historicos: [
								{
									year: '2016',
									month: 'Abril',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'C',
												class: 'red',
												text: 'Cancelado',
												nameKey: 'CANCELADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'C',
												class: 'red',
												text: 'Cancelado',
												nameKey: 'CANCELADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'C',
												class: 'red',
												text: 'Cancelado',
												nameKey: 'CANCELADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'C',
												class: 'red',
												text: 'Cancelado',
												nameKey: 'CANCELADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'C',
												class: 'red',
												text: 'Cancelado',
												nameKey: 'CANCELADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								}, {
									year: '2016',
									month: 'Marzo',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								}, {
									year: '2016',
									month: 'Noviembre',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								}, {
									year: '2016',
									month: 'Noviembre',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								}, {
									year: '2016',
									month: 'Noviembre',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								}, {
									year: '2016',
									month: 'Abril',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								}, {
									year: '2016',
									month: 'Marzo',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								}, {
									year: '2016',
									month: 'Marzo',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								}, {
									year: '2016',
									month: 'Marzo',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								}, {
									year: '2016',
									month: 'Abril',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								}, {
									year: '2016',
									month: 'Marzo',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								}
							]
						}
					},
					{
						name: '5678',
						disabled: false,
						resumen: {
							saldo: '110.999.270',
							credito: '50.111.000',
							transferencias: '161.555.720'
						},
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
							}, {
								date: '23-04-2016',
								description: 'Abono de Terceros',
								serie: '00000000000015',
								cargo: 400000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Abono de Terceros',
								serie: '00000000000015',
								cargo: 400000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Sueldos / Nominas Lorem ipsum dolor set amet',
								serie: '00000000000015',
								cargo: 400000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Abono de Terceros',
								serie: '00000000000015',
								cargo: 400000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Abono de Terceros',
								serie: '00000000000015',
								cargo: 400000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Sueldos / Nominas Lorem ipsum dolor set amet',
								serie: '00000000000015',
								cargo: 400000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Abono de Terceros',
								serie: '00000000000015',
								cargo: 400000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Abono de Terceros',
								serie: '00000000000015',
								cargo: 400000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Abono de Terceros',
								serie: '00000000000015',
								cargo: 400000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Abono de Terceros',
								serie: '00000000000015',
								cargo: 100000,
								saldo: '400.000.0000'
							}, {
								date: '23-04-2016',
								description: 'Abono de Terceros',
								serie: '00000000000015',
								cargo: 400000,
								saldo: '400.000.0000'
							}
							],
							interes: [
								{
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}, {
								date: '23-04-2016',
								saldo: '400.000.0000',
								tasa: '0,04',
								interes: '400.000'
							}
							],
							historica: [
								{
									year: '2016',
									month: 'Mayo',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Mayo',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Abril',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Marzo',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Febrero',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Mayo',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Noviembre',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Mayo',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Mayo',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Mayo',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Mayo',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Mayo',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
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
							}, {
								cheque: '123456789000000000',
								pago: 'Sin Información',
								monto: '$100.000',
								selected: false,
								id: 12
							}, {
								cheque: '123456789000000000',
								pago: 'Sin Información',
								monto: '$100.000',
								selected: false,
								id: 13
							}, {
								cheque: '123456789000000000',
								pago: 'Sin Información',
								monto: '$100.000',
								selected: false,
								id: 14
							}, {
								cheque: '123456789000000000',
								pago: '23-04-2016',
								monto: '$100.000',
								selected: false,
								completed: true,
								id: 15
							}, {
								cheque: '123456789000000000',
								pago: '23-04-2016',
								monto: '$100.000',
								selected: false,
								completed: true,
								id: 16
							}, {
								cheque: '123456789000000000',
								pago: '23-04-2016',
								monto: 'Sin Información',
								selected: false,
								id: 17
							}, {
								cheque: '123456789000000000',
								pago: '23-04-2016',
								monto: 'Sin Información',
								selected: false,
								id: 18
							}, {
								cheque: '123456789000000000',
								pago: '23-04-2016',
								monto: 'Sin Información',
								selected: false,
								id: 19
							}, {
								cheque: '123456789000000000',
								pago: '23-04-2016',
								monto: '$900.000',
								selected: false,
								completed: true,
								id: 20
							}, {
								cheque: '123456789000000000',
								pago: '23-04-2016',
								monto: '$100.000',
								selected: false,
								completed: true,
								id: 21
							}, {
								cheque: '123456789000000000',
								pago: 'Sin Información',
								monto: '$100.000',
								selected: false,
								id: 22
							}]
						},
						transferencias: {
							estados: [
								{
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Alto Monto',
									origen: '32165498',
									destinatario: 'Empresa de Transportes Rurales Limitada',
									transferencia: '$400.000',
									firmas: [
										{
											name: 'Pablo Hernandez. A.',
											status: true
										},
										{
											name: 'Matias Contreras. B',
											status: true
										},
										{
											name: 'Maria Teresa Correa. R',
											status: false
										},
										{
											name: 'Marcela Acevedo. P',
											status: false
										}],
									firmTotal: 2,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								},
								{
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Alto Monto',
									origen: '32165498',
									destinatario: 'Administradora de Supermercados Hiper Limitada',
									transferencia: '$400.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: true
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: true
									}, {
										name: 'Marcela Acevedo. P',
										status: false
									}],
									firmTotal: 3,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								},
								{
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Alto Monto',
									origen: '32165498',
									destinatario: 'Empresa de Transportes Rurales Limitada',
									transferencia: '$400.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: false
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: false
									}, {
										name: 'Marcela Acevedo. P',
										status: false
									}],
									firmTotal: 1,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								},
								{
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Pagos Masivos',
									origen: '32165498',
									destinatario: 'Administradora de Supermercados Hiper Limitada',
									transferencia: '$1.023.000',
									firmas: [
										{
											name: 'Pablo Hernandez. A.',
											status: true
										},
										{
											name: 'Matias Contreras. B',
											status: true
										},
										{
											name: 'Maria Teresa Correa. R',
											status: true
										},
										{
											name: 'Marcela Acevedo. P',
											status: false
										}],
									firmTotal: 3,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								},
								{
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Alto Monto',
									origen: '32165498',
									destinatario: 'Empresa de Transportes Rurales Limitada',
									transferencia: '$450.000',
									firmas: [
										{
											name: 'Pablo Hernandez. A.',
											status: true
										},
										{
											name: 'Matias Contreras. B',
											status: true
										},
										{
											name: 'Maria Teresa Correa. R',
											status: true
										},
										{
											name: 'Marcela Acevedo. P',
											status: true
										}],
									firmTotal: 4,
									estado: {
										icon: 'A',
										class: 'green',
										text: 'Aprobada',
										nameKey: 'APROBADA'
									}
								},
								{
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Alto Monto',
									origen: '32165498',
									destinatario: 'Empresa de Transportes Rurales Limitada',
									transferencia: '$400.000',
									firmas: [
										{
											name: 'Pablo Hernandez. A.',
											status: true
										},
										{
											name: 'Matias Contreras. B',
											status: true
										},
										{
											name: 'Maria Teresa Correa. R',
											status: true
										},
										{
											name: 'Marcela Acevedo. P',
											status: false
										}],
									firmTotal: 3,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								}, {
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Pagos Masivos',
									origen: '32165498',
									destinatario: 'Empresa de Transportes Rurales Limitada',
									transferencia: '$400.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: true
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: true
									}, {
										name: 'Marcela Acevedo. P',
										status: false
									}],
									firmTotal: 3,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								}, {
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Alto Monto',
									origen: '32165498',
									destinatario: 'Empresa de Transportes Rurales Limitada',
									transferencia: '$400.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: true
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: false
									}, {
										name: 'Marcela Acevedo. P',
										status: false
									}],
									firmTotal: 2,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								}, {
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Alto Monto',
									origen: '32165498',
									destinatario: 'Empresa de Transportes Rurales Limitada',
									transferencia: '$400.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: true
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: false
									}, {
										name: 'Marcela Acevedo. P',
										status: false
									}],
									firmTotal: 2,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								}, {
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Pagos Masivos',
									origen: '32165498',
									destinatario: 'Empresa de Transportes Rurales Limitada',
									transferencia: '$400.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: true
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: true
									}, {
										name: 'Marcela Acevedo. P',
										status: false
									}],
									firmTotal: 3,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								}, {
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Alto Monto',
									origen: '32165498',
									destinatario: 'Empresa de Transportes Rurales Limitada',
									transferencia: '$400.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: true
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: false
									}, {
										name: 'Marcela Acevedo. P',
										status: false
									}],
									firmTotal: 2,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								}, {
									selected: false,
									plus: false,
									plusData: [],
									date: '23-04-2016',
									type: 'Alto Monto',
									origen: '32165498',
									destinatario: 'Administradora de Supermercados Hiper Limitada',
									transferencia: '$400.000',
									firmas: [{
										name: 'Pablo Hernandez. A.',
										status: true
									}, {
										name: 'Matias Contreras. B',
										status: true
									}, {
										name: 'Maria Teresa Correa. R',
										status: true
									}, {
										name: 'Marcela Acevedo. P',
										status: false
									}],
									firmTotal: 3,
									estado: {
										icon: 'P',
										class: 'orage',
										text: 'Pendiente Autorización',
										nameKey: 'AUTORIZADO'
									}
								}
							],
							destinatarios: [{
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									type: {id: 2, name: "Cuenta Vista"}
								}
								],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'A',
									class: 'green',
									text: 'Activo',
									nameKey: 'ACTIVO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Crédito e Inversiones',
									accounts: [{
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 2, name: "Cuenta Vista"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									type: {id: 1, name: "Cuenta Corriente"}
								}, {
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									type: {id: 3, name: "Cuenta Electrónica"}
								}],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'A',
									class: 'green',
									text: 'Activo',
									nameKey: 'ACTIVO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Crédito e Inversiones',
									accounts: [{
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 3, name: "Cuenta Electrónica"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									type: {id: 1, name: "Cuenta Corriente"}
								}],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'P',
									class: 'orage',
									text: 'Pendiente Autorización',
									nameKey: 'AUTORIZADO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Crédito e Inversiones',
									accounts: [{
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 3, name: "Cuenta Electrónica"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 3, name: "Cuenta Electrónica"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'P',
									class: 'orage',
									text: 'Pendiente Autorización',
									nameKey: 'AUTORIZADO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Crédito e Inversiones',
									accounts: [{
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 2, name: "Cuenta Vista"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									tipo: ''
								}],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'A',
									class: 'green',
									text: 'Activo',
									nameKey: 'ACTIVO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Crédito e Inversiones',
									accounts: [{
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									tipo: ''
								}],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'A',
									class: 'green',
									text: 'Activo',
									nameKey: 'ACTIVO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco itau',
									accounts: [{
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									tipo: ''
								}],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'A',
									class: 'green',
									text: 'Activo',
									nameKey: 'ACTIVO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Crédito e Inversiones',
									accounts: [{
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 2, name: "Cuenta Vista"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									tipo: ''
								}],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'P',
									class: 'orage',
									text: 'Pendiente Autorización',
									nameKey: 'AUTORIZADO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco itau',
									accounts: [{
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 2, name: "Cuenta Vista"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									tipo: ''
								}],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'P',
									class: 'orage',
									text: 'Pendiente Autorización',
									nameKey: 'AUTORIZADO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Chile / Edwards',
									accounts: [{
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 2, name: "Cuenta Vista"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'A',
									class: 'green',
									text: 'Activo',
									nameKey: 'ACTIVO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Chile / Edwards',
									accounts: [{
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 3, name: "Cuenta Electrónica"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 2, name: "Cuenta Vista"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									tipo: ''
								}
								],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'A',
									class: 'green',
									text: 'Activo',
									nameKey: 'ACTIVO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Crédito e Inversiones',
									accounts: [{
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 2, name: "Cuenta Vista"}
									}, {
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 3, name: "Cuenta Electrónica"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}, {
								plus: false,
								plusData: [{
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									tipo: ''
								}, {
									bank: 'Banco de Crédito e Inversiones',
									account: '2403350100000000',
									tipo: ''
								}],
								destinatario: 'Empresa de Transportes Rurales Limitada',
								rut: '70.569.785-9',
								estado: {
									icon: 'A',
									class: 'green',
									text: 'Activo',
									nameKey: 'ACTIVO'
								},
								updateAccount: true,
								account: {
									bank: 'Banco de Crédito e Inversiones',
									accounts: [{
										banco: 'Banco Consorcio',
										account: '2403350546780000',
										type: {id: 1, name: "Cuenta Corriente"}
									}]
								},
								razon: 'Transportes Rurales de Animales',
								contact: {
									name: 'Marcelo Arrigadad',
									mail: 'mail@mail.cl',
									phone: '+56 9 123 456 567'
								}
							}
							],
							historicos: [
								{
									year: '2016',
									month: 'Abril',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Marzo',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Noviembre',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Noviembre',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Noviembre',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Abril',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Marzo',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Marzo',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Marzo',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Abril',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								},
								{
									year: '2016',
									month: 'Marzo',
									folio: '32165498',
									movimientos: [
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: false
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 1,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$1.023.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$450.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: true
											}],
											firmTotal: 4,
											estado: {
												icon: 'A',
												class: 'green',
												text: 'Aprobada',
												nameKey: 'APROBADA'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Pagos Masivos',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Empresa de Transportes Rurales Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: false
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 2,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										},
										{
											selected: false,
											plus: false,
											plusData: [],
											date: '23-04-2016',
											type: 'Alto Monto',
											origen: '32165498',
											destinatario: 'Administradora de Supermercados Hiper Limitada',
											transferencia: '$400.000',
											firmas: [{
												name: 'Pablo Hernandez. A.',
												status: true
											}, {
												name: 'Matias Contreras. B',
												status: true
											}, {
												name: 'Maria Teresa Correa. R',
												status: true
											}, {
												name: 'Marcela Acevedo. P',
												status: false
											}],
											firmTotal: 3,
											estado: {
												icon: 'P',
												class: 'orage',
												text: 'Pendiente Autorización',
												nameKey: 'AUTORIZADO'
											}
										}
									],
								}
							]
						}
					},
					{
						name: '9012',
						disabled: true,
						resumen: {
							saldo: '110.999.270',
							credito: '50.111.000',
							transferencias: '161.555.720'
						}
					},
					{
						name: '3456',
						disabled: true,
						resumen: {
							saldo: '110.999.270',
							credito: '50.111.000',
							transferencias: '161.555.720'
						}
					}],
				destinatario: ['Juan Perez', "Jane Garcia", "Armando Hart", "Jose Fernandez", "Marcelo Perez Ignacio Gonzalez"],
			}, {
				rol: 'OPERADOR',
				name: 'Transbank S.A',
				nameID: 'TRANSBANK',
				accounts: [{
					name: '8723',
					disabled: false,
					resumen: {
						saldo: '110.999.270',
						credito: '50.111.000',
						transferencias: '161.555.720'
					},
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
						}, {
							date: '23-04-2016',
							description: 'Abono de Terceros',
							serie: '00000000000015',
							cargo: 400000,
							saldo: '400.000.0000'
						}, {
							date: '23-04-2016',
							description: 'Abono de Terceros',
							serie: '00000000000015',
							cargo: 400000,
							saldo: '400.000.0000'
						}, {
							date: '23-04-2016',
							description: 'Sueldos / Nominas Lorem ipsum dolor set amet',
							serie: '00000000000015',
							cargo: 400000,
							saldo: '400.000.0000'
						}, {
							date: '23-04-2016',
							description: 'Abono de Terceros',
							serie: '00000000000015',
							cargo: 400000,
							saldo: '400.000.0000'
						}, {
							date: '23-04-2016',
							description: 'Abono de Terceros',
							serie: '00000000000015',
							cargo: 400000,
							saldo: '400.000.0000'
						}, {
							date: '23-04-2016',
							description: 'Sueldos / Nominas Lorem ipsum dolor set amet',
							serie: '00000000000015',
							cargo: 400000,
							saldo: '400.000.0000'
						}, {
							date: '23-04-2016',
							description: 'Abono de Terceros',
							serie: '00000000000015',
							cargo: 400000,
							saldo: '400.000.0000'
						}, {
							date: '23-04-2016',
							description: 'Abono de Terceros',
							serie: '00000000000015',
							cargo: 400000,
							saldo: '400.000.0000'
						}, {
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
						}, {
							date: '23-04-2016',
							saldo: '400.000.0000',
							tasa: '0,04',
							interes: '400.000'
						}, {
							date: '23-04-2016',
							saldo: '400.000.0000',
							tasa: '0,04',
							interes: '400.000'
						}, {
							date: '23-04-2016',
							saldo: '400.000.0000',
							tasa: '0,04',
							interes: '400.000'
						}, {
							date: '23-04-2016',
							saldo: '400.000.0000',
							tasa: '0,04',
							interes: '400.000'
						}, {
							date: '23-04-2016',
							saldo: '400.000.0000',
							tasa: '0,04',
							interes: '400.000'
						}, {
							date: '23-04-2016',
							saldo: '400.000.0000',
							tasa: '0,04',
							interes: '400.000'
						}, {
							date: '23-04-2016',
							saldo: '400.000.0000',
							tasa: '0,04',
							interes: '400.000'
						}, {
							date: '23-04-2016',
							saldo: '400.000.0000',
							tasa: '0,04',
							interes: '400.000'
						}, {
							date: '23-04-2016',
							saldo: '400.000.0000',
							tasa: '0,04',
							interes: '400.000'
						}
						],
						historica: [
							{
								year: '2016',
								month: 'Mayo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							},
							{
								year: '2016',
								month: 'Mayo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							},
							{
								year: '2016',
								month: 'Abril',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							},
							{
								year: '2016',
								month: 'Marzo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							},
							{
								year: '2016',
								month: 'Febrero',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							},
							{
								year: '2016',
								month: 'Mayo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							},
							{
								year: '2016',
								month: 'Noviembre',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							},
							{
								year: '2016',
								month: 'Mayo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							},
							{
								year: '2016',
								month: 'Mayo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							},
							{
								year: '2016',
								month: 'Mayo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
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
							id: 31
						}, {
							cheque: '123456789000000000',
							pago: 'Sin Información',
							monto: '$100.000',
							selected: false,
							id: 32
						}, {
							cheque: '123456789000000000',
							pago: 'Sin Información',
							monto: '$100.000',
							selected: false,
							id: 33
						}, {
							cheque: '123456789000000000',
							pago: 'Sin Información',
							monto: '$100.000',
							selected: false,
							id: 34
						}, {
							cheque: '123456789000000000',
							pago: '23-04-2016',
							monto: '$100.000',
							selected: false,
							completed: true,
							id: 35
						}, {
							cheque: '123456789000000000',
							pago: '23-04-2016',
							monto: '$100.000',
							selected: false,
							completed: true,
							id: 36
						}, {
							cheque: '123456789000000000',
							pago: '23-04-2016',
							monto: 'Sin Información',
							selected: false,
							id: 37
						}, {
							cheque: '123456789001111000',
							pago: '23-04-2016',
							monto: 'Sin Información',
							selected: false,
							id: 38
						}, {
							cheque: '123456789001111000',
							pago: '23-04-2016',
							monto: 'Sin Información',
							selected: false,
							id: 39
						}, {
							cheque: '123456789001111000',
							pago: '23-04-2016',
							monto: '$900.000',
							selected: false,
							completed: true,
							id: 40
						}, {
							cheque: '123456789000000000',
							pago: '23-04-2016',
							monto: '$100.000',
							selected: false,
							completed: true,
							id: 41
						}, {
							cheque: '123456789000000000',
							pago: 'Sin Información',
							monto: '$100.000',
							selected: false,
							id: 42
						}]
					},
					transferencias: {
						estados: [{
							selected: false,
							plus: false,
							plusData: [],
							date: '23-04-2016',
							type: 'Alto Monto',
							origen: '32165498',
							destinatario: 'Empresa de Transportes Rurales Limitada',
							transferencia: '$400.000',
							firmas: [{
								name: 'Pablo Hernandez. A.',
								status: true
							}, {
								name: 'Matias Contreras. B',
								status: true
							}, {
								name: 'Maria Teresa Correa. R',
								status: false
							}, {
								name: 'Marcela Acevedo. P',
								status: false
							}],
							firmTotal: 2,
							estado: {
								icon: 'P',
								class: 'orage',
								text: 'Pendiente Visado',
								nameKey: 'VISADO'
							}
						}, {
							selected: false,
							plus: false,
							plusData: [],
							date: '23-04-2016',
							type: 'Alto Monto',
							origen: '32165498',
							destinatario: 'Administradora de Supermercados Hiper Limitada',
							transferencia: '$400.000',
							firmas: [{
								name: 'Pablo Hernandez. A.',
								status: true
							}, {
								name: 'Matias Contreras. B',
								status: true
							}, {
								name: 'Maria Teresa Correa. R',
								status: true
							}, {
								name: 'Marcela Acevedo. P',
								status: false
							}],
							firmTotal: 3,
							estado: {
								icon: 'P',
								class: 'orage',
								text: 'Pendiente Visado',
								nameKey: 'VISADO'
							}
						}, {
							selected: false,
							plus: false,
							plusData: [],
							date: '23-04-2016',
							type: 'Alto Monto',
							origen: '32165498',
							destinatario: 'Empresa de Transportes Rurales Limitada',
							transferencia: '$400.000',
							firmas: [{
								name: 'Pablo Hernandez. A.',
								status: false
							}, {
								name: 'Matias Contreras. B',
								status: true
							}, {
								name: 'Maria Teresa Correa. R',
								status: false
							}, {
								name: 'Marcela Acevedo. P',
								status: false
							}],
							firmTotal: 2,
							estado: {
								icon: 'P',
								class: 'orage',
								text: 'Pendiente Visado',
								nameKey: 'VISADO'
							}
						}, {
							selected: false,
							plus: false,
							plusData: [],
							date: '23-04-2016',
							type: 'Pagos Masivos',
							origen: '32165498',
							destinatario: 'Administradora de Supermercados Hiper Limitada',
							transferencia: '$1.023.000',
							firmas: [{
								name: 'Pablo Hernandez. A.',
								status: true
							}, {
								name: 'Matias Contreras. B',
								status: true
							}, {
								name: 'Maria Teresa Correa. R',
								status: true
							}, {
								name: 'Marcela Acevedo. P',
								status: false
							}],
							firmTotal: 3,
							estado: {
								icon: 'P',
								class: 'orage',
								text: 'Pendiente Visado',
								nameKey: 'VISADO'
							}
						}, {
							selected: false,
							plus: false,
							plusData: [],
							date: '23-04-2016',
							type: 'Alto Monto',
							origen: '32165498',
							destinatario: 'Empresa de Transportes Rurales Limitada',
							transferencia: '$450.000',
							firmas: [{
								name: 'Pablo Hernandez. A.',
								status: true
							}, {
								name: 'Matias Contreras. B',
								status: false
							}, {
								name: 'Maria Teresa Correa. R',
								status: true
							}, {
								name: 'Marcela Acevedo. P',
								status: false
							}],
							firmTotal: 2,
							estado: {
								icon: 'P',
								class: 'orage',
								text: 'Pendiente Visado',
								nameKey: 'VISADO'
							}
						}, {
							selected: false,
							plus: false,
							plusData: [],
							date: '23-04-2016',
							type: 'Alto Monto',
							origen: '32165498',
							destinatario: 'Empresa de Transportes Rurales Limitada',
							transferencia: '$400.000',
							firmas: [{
								name: 'Pablo Hernandez. A.',
								status: true
							}, {
								name: 'Matias Contreras. B',
								status: true
							}, {
								name: 'Maria Teresa Correa. R',
								status: true
							}, {
								name: 'Marcela Acevedo. P',
								status: false
							}],
							firmTotal: 3,
							estado: {
								icon: 'P',
								class: 'orage',
								text: 'Pendiente Visado',
								nameKey: 'VISADO'
							}
						}, {
							selected: false,
							plus: false,
							plusData: [],
							date: '23-04-2016',
							type: 'Pagos Masivos',
							origen: '32165498',
							destinatario: 'Empresa de Transportes Rurales Limitada',
							transferencia: '$400.000',
							firmas: [{
								name: 'Pablo Hernandez. A.',
								status: true
							}, {
								name: 'Matias Contreras. B',
								status: true
							}, {
								name: 'Maria Teresa Correa. R',
								status: true
							}, {
								name: 'Marcela Acevedo. P',
								status: false
							}],
							firmTotal: 3,
							estado: {
								icon: 'P',
								class: 'orage',
								text: 'Pendiente Visado',
								nameKey: 'VISADO'
							}
						}, {
							selected: false,
							plus: false,
							plusData: [],
							date: '23-04-2016',
							type: 'Alto Monto',
							origen: '32165498',
							destinatario: 'Empresa de Transportes Rurales Limitada',
							transferencia: '$400.000',
							firmas: [{
								name: 'Pablo Hernandez. A.',
								status: true
							}, {
								name: 'Matias Contreras. B',
								status: true
							}, {
								name: 'Maria Teresa Correa. R',
								status: false
							}, {
								name: 'Marcela Acevedo. P',
								status: false
							}],
							firmTotal: 2,
							estado: {
								icon: 'P',
								class: 'orage',
								text: 'Pendiente Visado',
								nameKey: 'VISADO'
							}
						}, {
							selected: false,
							plus: false,
							plusData: [],
							date: '23-04-2016',
							type: 'Alto Monto',
							origen: '32165498',
							destinatario: 'Empresa de Transportes Rurales Limitada',
							transferencia: '$400.000',
							firmas: [{
								name: 'Pablo Hernandez. A.',
								status: true
							}, {
								name: 'Matias Contreras. B',
								status: true
							}, {
								name: 'Maria Teresa Correa. R',
								status: false
							}, {
								name: 'Marcela Acevedo. P',
								status: false
							}],
							firmTotal: 2,
							estado: {
								icon: 'P',
								class: 'orage',
								text: 'Pendiente Visado',
								nameKey: 'VISADO'
							}
						}, {
							selected: false,
							plus: false,
							plusData: [],
							date: '23-04-2016',
							type: 'Pagos Masivos',
							origen: '32165498',
							destinatario: 'Empresa de Transportes Rurales Limitada',
							transferencia: '$400.000',
							firmas: [{
								name: 'Pablo Hernandez. A.',
								status: true
							}, {
								name: 'Matias Contreras. B',
								status: true
							}, {
								name: 'Maria Teresa Correa. R',
								status: true
							}, {
								name: 'Marcela Acevedo. P',
								status: false
							}],
							firmTotal: 3,
							estado: {
								icon: 'P',
								class: 'orage',
								text: 'Pendiente Visado',
								nameKey: 'VISADO'
							}
						}, {
							selected: false,
							plus: false,
							plusData: [],
							date: '23-04-2016',
							type: 'Alto Monto',
							origen: '32165498',
							destinatario: 'Empresa de Transportes Rurales Limitada',
							transferencia: '$400.000',
							firmas: [{
								name: 'Pablo Hernandez. A.',
								status: true
							}, {
								name: 'Matias Contreras. B',
								status: true
							}, {
								name: 'Maria Teresa Correa. R',
								status: false
							}, {
								name: 'Marcela Acevedo. P',
								status: false
							}],
							firmTotal: 2,
							estado: {
								icon: 'P',
								class: 'orage',
								text: 'Pendiente Visado',
								nameKey: 'VISADO'
							}
						}, {
							selected: false,
							plus: false,
							plusData: [],
							date: '23-04-2016',
							type: 'Alto Monto',
							origen: '32165498',
							destinatario: 'Administradora de Supermercados Hiper Limitada',
							transferencia: '$400.000',
							firmas: [{
								name: 'Pablo Hernandez. A.',
								status: true
							}, {
								name: 'Matias Contreras. B',
								status: true
							}, {
								name: 'Maria Teresa Correa. R',
								status: true
							}, {
								name: 'Marcela Acevedo. P',
								status: false
							}],
							firmTotal: 3,
							estado: {
								icon: 'P',
								class: 'orage',
								text: 'Pendiente Visado',
								nameKey: 'VISADO'
							}
						}
						],
						destinatarios: [{
							plus: false,
							plusData: [{
								bank: 'Banco de Crédito e Inversiones',
								account: '2403350100000000',
								tipo: ''
							}
							],
							destinatario: 'Empresa de Transportes Rurales Limitada',
							rut: '70.569.785-9',
							estado: {
								icon: 'A',
								class: 'green',
								text: 'Activo',
								nameKey: 'ACTIVO'
							},
							updateAccount: true,
							account: {
								bank: 'Banco de Crédito e Inversiones',
								accounts: [{
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 3, name: "Cuenta Electrónica"}
								}, {
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 1, name: "Cuenta Corriente"}
								}]
							},
							razon: 'Transportes Rurales de Animales',
							contact: {
								name: 'Marcelo Arrigadad',
								mail: 'mail@mail.cl',
								phone: '+56 9 123 456 567'
							}
						}, {
							plus: false,
							plusData: [{
								bank: 'Banco de Crédito e Inversiones',
								account: '2403350100000000',
								tipo: ''
							}, {
								bank: 'Banco de Crédito e Inversiones',
								account: '2403350100000000',
								tipo: ''
							}],
							destinatario: 'Empresa de Transportes Rurales Limitada',
							rut: '70.569.785-9',
							estado: {
								icon: 'A',
								class: 'green',
								text: 'Activo',
								nameKey: 'ACTIVO'
							},
							updateAccount: true,
							account: {
								bank: 'Banco de Crédito e Inversiones',
								accounts: [{
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 1, name: "Cuenta Corriente"}
								}]
							},
							razon: 'Transportes Rurales de Animales',
							contact: {
								name: 'Marcelo Arrigadad',
								mail: 'mail@mail.cl',
								phone: '+56 9 123 456 567'
							}
						}, {
							plus: false,
							plusData: [{
								bank: 'Banco de Crédito e Inversiones',
								account: '2403350100000000',
								tipo: ''
							}],
							destinatario: 'Empresa de Transportes Rurales Limitada',
							rut: '70.569.785-9',
							estado: {
								icon: 'P',
								class: 'orage',
								text: 'Pendiente Autorización',
								nameKey: 'AUTORIZADO'
							},
							updateAccount: true,
							account: {
								bank: 'Banco de Crédito e Inversiones',
								accounts: [{
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 3, name: "Cuenta Electrónica"}
								}, {
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: ''
								}, {
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 2, name: "Cuenta Vista"}
								}, {
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 1, name: "Cuenta Corriente"}
								}, {
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 1, name: "Cuenta Corriente"}
								}]
							},
							razon: 'Transportes Rurales de Animales',
							contact: {
								name: 'Marcelo Arrigadad',
								mail: 'mail@mail.cl',
								phone: '+56 9 123 456 567'
							}
						}, {
							plus: false,
							plusData: [],
							destinatario: 'Empresa de Transportes Rurales Limitada',
							rut: '70.569.785-9',
							estado: {
								icon: 'P',
								class: 'orage',
								text: 'Pendiente Autorización',
								nameKey: 'AUTORIZADO'
							},
							updateAccount: true,
							account: {
								bank: 'Banco de Crédito e Inversiones',
								accounts: [{
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 1, name: "Cuenta Corriente"}
								}, {
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 2, name: "Cuenta Vista"}
								}]
							},
							razon: 'Transportes Rurales de Animales',
							contact: {
								name: 'Marcelo Arrigadad',
								mail: 'mail@mail.cl',
								phone: '+56 9 123 456 567'
							}
						}, {
							plus: false,
							plusData: [{
								bank: 'Banco de Crédito e Inversiones',
								account: '2403350100000000',
								tipo: ''
							}],
							destinatario: 'Empresa de Transportes Rurales Limitada',
							rut: '70.569.785-9',
							estado: {
								icon: 'A',
								class: 'green',
								text: 'Activo',
								nameKey: 'ACTIVO'
							},
							updateAccount: true,
							account: {
								bank: 'Banco de Crédito e Inversiones',
								accounts: [{
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 1, name: "Cuenta Corriente"}
								}, {
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 3, name: "Cuenta Electrónica"}
								}]
							},
							razon: 'Transportes Rurales de Animales',
							contact: {
								name: 'Marcelo Arrigadad',
								mail: 'mail@mail.cl',
								phone: '+56 9 123 456 567'
							}
						}, {
							plus: false,
							plusData: [{
								bank: 'Banco de Crédito e Inversiones',
								account: '2403350100000000',
								tipo: ''
							}],
							destinatario: 'Empresa de Transportes Rurales Limitada',
							rut: '70.569.785-9',
							estado: {
								icon: 'A',
								class: 'green',
								text: 'Activo',
								nameKey: 'ACTIVO'
							},
							updateAccount: true,
							account: {
								bank: 'Banco itau',
								accounts: [{
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 2, name: "Cuenta Vista"}
								}]
							},
							razon: 'Transportes Rurales de Animales',
							contact: {
								name: 'Marcelo Arrigadad',
								mail: 'mail@mail.cl',
								phone: '+56 9 123 456 567'
							}
						}, {
							plus: false,
							plusData: [{
								bank: 'Banco de Crédito e Inversiones',
								account: '2403350100000000',
								tipo: ''
							}],
							destinatario: 'Empresa de Transportes Rurales Limitada',
							rut: '70.569.785-9',
							estado: {
								icon: 'A',
								class: 'green',
								text: 'Activo',
								nameKey: 'ACTIVO'
							},
							updateAccount: true,
							account: {
								bank: 'Banco de Crédito e Inversiones',
								accounts: [{
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 1, name: "Cuenta Corriente"}
								}, {
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 1, name: "Cuenta Corriente"}
								}]
							},
							razon: 'Transportes Rurales de Animales',
							contact: {
								name: 'Marcelo Arrigadad',
								mail: 'mail@mail.cl',
								phone: '+56 9 123 456 567'
							}
						}, {
							plus: false,
							plusData: [{
								bank: 'Banco de Crédito e Inversiones',
								account: '2403350100000000',
								tipo: ''
							}],
							destinatario: 'Empresa de Transportes Rurales Limitada',
							rut: '70.569.785-9',
							estado: {
								icon: 'P',
								class: 'orage',
								text: 'Pendiente Autorización',
								nameKey: 'AUTORIZADO'
							},
							updateAccount: true,
							account: {
								bank: 'Banco itau',
								accounts: [{
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 1, name: "Cuenta Corriente"}
								}, {
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 1, name: "Cuenta Corriente"}
								}]
							},
							razon: 'Transportes Rurales de Animales',
							contact: {
								name: 'Marcelo Arrigadad',
								mail: 'mail@mail.cl',
								phone: '+56 9 123 456 567'
							}
						}, {
							plus: false,
							plusData: [{
								bank: 'Banco de Crédito e Inversiones',
								account: '2403350100000000',
								tipo: ''
							}],
							destinatario: 'Empresa de Transportes Rurales Limitada',
							rut: '70.569.785-9',
							estado: {
								icon: 'P',
								class: 'orage',
								text: 'Pendiente Autorización',
								nameKey: 'AUTORIZADO'
							},
							updateAccount: true,
							account: {
								bank: 'Banco de Chile / Edwards',
								accounts: [{
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 1, name: "Cuenta Corriente"}
								}, {
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 1, name: "Cuenta Corriente"}
								}]
							},
							razon: 'Transportes Rurales de Animales',
							contact: {
								name: 'Marcelo Arrigadad',
								mail: 'mail@mail.cl',
								phone: '+56 9 123 456 567'
							}
						}, {
							plus: false,
							plusData: [],
							destinatario: 'Empresa de Transportes Rurales Limitada',
							rut: '70.569.785-9',
							estado: {
								icon: 'A',
								class: 'green',
								text: 'Activo',
								nameKey: 'ACTIVO'
							},
							updateAccount: true,
							account: {
								bank: 'Banco de Chile / Edwards',
								accounts: [{
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 1, name: "Cuenta Corriente"}
								}, {
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 1, name: "Cuenta Corriente"}
								}, {
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 1, name: "Cuenta Corriente"}
								}, {
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 1, name: "Cuenta Corriente"}
								}]
							},
							razon: 'Transportes Rurales de Animales',
							contact: {
								name: 'Marcelo Arrigadad',
								mail: 'mail@mail.cl',
								phone: '+56 9 123 456 567'
							}
						}, {
							plus: false,
							plusData: [{
								bank: 'Banco de Crédito e Inversiones',
								account: '2403350100000000',
								tipo: ''
							}
							],
							destinatario: 'Empresa de Transportes Rurales Limitada',
							rut: '70.569.785-9',
							estado: {
								icon: 'A',
								class: 'green',
								text: 'Activo',
								nameKey: 'ACTIVO'
							},
							updateAccount: true,
							account: {
								bank: 'Banco de Crédito e Inversiones',
								accounts: [{
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 1, name: "Cuenta Corriente"}
								}, {
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 1, name: "Cuenta Corriente"}
								}]
							},
							razon: 'Transportes Rurales de Animales',
							contact: {
								name: 'Marcelo Arrigadad',
								mail: 'mail@mail.cl',
								phone: '+56 9 123 456 567'
							}
						}, {
							plus: false,
							plusData: [{
								bank: 'Banco de Crédito e Inversiones',
								account: '2403350100000000',
								tipo: ''
							}, {
								bank: 'Banco de Crédito e Inversiones',
								account: '2403350100000000',
								tipo: ''
							}],
							destinatario: 'Empresa de Transportes Rurales Limitada',
							rut: '70.569.785-9',
							estado: {
								icon: 'A',
								class: 'green',
								text: 'Activo',
								nameKey: 'ACTIVO'
							},
							updateAccount: true,
							account: {
								bank: 'Banco de Crédito e Inversiones',
								accounts: [{
									banco: 'Banco Consorcio',
									account: '2403350546780000',
									type: {id: 1, name: "Cuenta Corriente"}
								}]
							},
							razon: 'Transportes Rurales de Animales',
							contact: {
								name: 'Marcelo Arrigadad',
								mail: 'mail@mail.cl',
								phone: '+56 9 123 456 567'
							}
						}
						],
						historicos: [
							{
								year: '2016',
								month: 'Abril',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							},
							{
								year: '2016',
								month: 'Marzo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							},
							{
								year: '2016',
								month: 'Noviembre',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							},
							{
								year: '2016',
								month: 'Noviembre',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							},
							{
								year: '2016',
								month: 'Noviembre',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							},
							{
								year: '2016',
								month: 'Abril',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							},
							{
								year: '2016',
								month: 'Marzo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							},
							{
								year: '2016',
								month: 'Marzo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							},
							{
								year: '2016',
								month: 'Marzo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							},
							{
								year: '2016',
								month: 'Abril',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							},
							{
								year: '2016',
								month: 'Marzo',
								folio: '32165498',
								movimientos: [
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: false
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 1,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$1.023.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$450.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: true
										}],
										firmTotal: 4,
										estado: {
											icon: 'A',
											class: 'green',
											text: 'Aprobada',
											nameKey: 'APROBADA'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Pagos Masivos',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Empresa de Transportes Rurales Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: false
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 2,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									},
									{
										selected: false,
										plus: false,
										plusData: [],
										date: '23-04-2016',
										type: 'Alto Monto',
										origen: '32165498',
										destinatario: 'Administradora de Supermercados Hiper Limitada',
										transferencia: '$400.000',
										firmas: [{
											name: 'Pablo Hernandez. A.',
											status: true
										}, {
											name: 'Matias Contreras. B',
											status: true
										}, {
											name: 'Maria Teresa Correa. R',
											status: true
										}, {
											name: 'Marcela Acevedo. P',
											status: false
										}],
										firmTotal: 3,
										estado: {
											icon: 'P',
											class: 'orage',
											text: 'Pendiente Autorización',
											nameKey: 'AUTORIZADO'
										}
									}
								],
							}
						]
					}
				}, {
					name: '9001',
					disabled: true,
					resumen: {
						saldo: '110.999.270',
						credito: '50.111.000',
						transferencias: '161.555.720'
					}
				}],
				destinatario: ['Sold Perez', "Bob Garcia", "Henry Hart", "Yoshua Fernandez"],
			}, {
				rol: 'APODERADO',
				name: 'Coca-Cola de Chicle S.A',
				nameID: 'COCACOLA',
				accounts: [],
				destinatario: ['Sold Buy', "Bob Hernandez", "Henry Chay", "Lady Fernandez"],
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
