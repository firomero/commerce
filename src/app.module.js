// for loading styles we need to load main scss file
import styles from './styles/styles.scss';

// loading shared module
import './core/core.module';
// loading all module components
import './components/component.module';

const appModule = angular
	.module('app', [
		'ngResource',
		// shared module
		'app.core',
		// 3rd party modules
		'ui.router',
		// application specific modules
		'app.component'
	]);

export default appModule;
