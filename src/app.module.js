// for loading styles we need to load main scss file
import styles from './assets/styles.scss';

// loading shared module
import './core/core.module';
// loading all module components
import './components/component.module';

const appModule = angular
	.module('app', [
		'ngMaterial',
		'mgo-angular-wizard',
		'md-steppers',
		'ui.bootstrap',
		'ngResource',
		'ui.knob',
		// shared module
		'app.core',
		// 3rd party modules
		'ui.router',
		// application specific modules
		'app.component'
	]);

export default appModule;
