// for loading styles we need to load main scss file
import styles from './assets/styles.scss';

// loading shared module
import './modules/common/common.module';
import './modules/login/login.module';
import './modules/dashboard/dashboard.module';
// loading all module components
// import './components/component.module';

const appModule = angular
	.module('app', [
		'ngMaterial',
		'mgo-angular-wizard',
		'md-steppers',
		'ui.bootstrap',
		'ngResource',
		'ui.knob',
		// shared module
		'app.common',
		// 3rd party modules
		'ui.router',
		// application specific modules
		'app.login',
		'app.dashboard'
	]);

export default appModule;
