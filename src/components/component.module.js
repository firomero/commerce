import config from '../config/global.json';
import loginComponent from './login/login.component';

import ForgotController from './modals/forgot/forgot.controller';
import MessageConfirmController from './modals/message-confirm/message-confirm.controller';

const componentModule = angular.module('app.component', []);

componentModule.constant("_path", config._path);
//add independent controller example for modals
//tener en cuenta que si se utiliza un controller dentro de otro se tiene que declarar antes
componentModule.controller('MessageConfirmController', MessageConfirmController);
componentModule.controller('ForgotController', ForgotController);

// loading components, services, directives, specific to this module.
componentModule.component('login', loginComponent);

// export this module
export default componentModule;
