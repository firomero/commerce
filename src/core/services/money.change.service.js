export default class MoneyChangeService {
    
    constructor() {
		'ngInject';

        this.money = [{
            text: 'UF',
            porcent: '0.02',
            cash: 27010.03
        },{
            text: 'USD',
            porcent: '0.02',
            cash: 617.69
        },{
            text: 'EURO',
            porcent: '0.02',
            cash: 738.78
        },{
            text: 'LIBRA ESTERLINA',
            porcent: '0.02',
            cash: 839.82
        },{
            text: 'REAL BRASILEIRO',
            porcent: '0.02',
            cash: 174.27
        },{
            text: 'DOLAR HONG KONG',
            porcent: '0.02',
            cash: 78.69
        },{
            text: 'YEN',
            porcent: '0.02',
            cash: 5.62
        },{
            text: 'FRANCO SUIZO',
            porcent: '0.02',
            cash: 618.80
        }];

        localStorage.setItem('money', JSON.stringify(this.money));
	}
    
    getMoneyChange() {

        return JSON.parse(localStorage.getItem('money'))
    };
}