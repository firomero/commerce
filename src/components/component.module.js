import config from '../config/global.json';
import loginComponent from './login/login.component';
// import forgotComponent from './forgot/forgot.component';

import forgotController from './modals/forgot/forgot.controller';

const componentModule = angular.module('app.component', []);

componentModule.constant("_path", config._path);

componentModule.controller('forgotController', forgotController);

// loading components, services, directives, specific to this module.
componentModule.component('login', loginComponent);
// componentModule.component('forgot', forgotComponent);

// export this module
export default componentModule;
