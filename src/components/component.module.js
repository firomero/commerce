import config from '../config/global.json';
import loginComponent from './login/login.component';

import ForgotController from './modals/forgot/forgot.controller';

const componentModule = angular.module('app.component', []);

componentModule.constant("_path", config._path);
//add independent controller example for modals
componentModule.controller('ForgotController', ForgotController);

// loading components, services, directives, specific to this module.
componentModule.component('login', loginComponent);

// export this module
export default componentModule;
