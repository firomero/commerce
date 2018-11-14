// for loading styles we need to load main scss file
import styles from './assets/styles.scss';

// loading shared module
import './modules/common/common.module';
import './modules/login/login.module';
import './modules/dashboard/dashboard.module';
import './modules/investment/investment.module';
import './modules/transfer/transfer.module';
import './modules/user/user.module';
// loading all module components

const appModule = angular
	.module('app', [
		'ngMaterial',
		'mgo-angular-wizard',
		'md-steppers',
		'ui.bootstrap',
		'ngResource',
		'ui.knob',
		'ngMask',
		// shared module
		'app.common',
		// 3rd party modules
		'ui.router',
		// application specific modules
		'app.login',
		'app.dashboard',
		'app.investment',
		'app.transfer',
		'app.user'
	]);

export default appModule;
