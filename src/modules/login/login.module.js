import LoginController from './controller/login.controller';
import ForgotController from './controller/forgot.controller';
import SIIModalController from './controller/sii-modal.controller';

const LoginModule = angular.module('app.login', []);

LoginModule.controller('ForgotController', ForgotController);
LoginModule.controller('LoginController', LoginController);
LoginModule.controller('SIIModalController', SIIModalController);

// export this module
export default LoginModule;
