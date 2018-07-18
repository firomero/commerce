import LoginController from './controller/login.controller';
import ForgotController from './controller/forgot.controller';

const LoginModule = angular.module('app.login', []);

LoginModule.controller('ForgotController', ForgotController);
LoginModule.controller('LoginController', LoginController);

// export this module
export default LoginModule;
