import config from '../config/global.json';
import loginComponent from './login/login.component';

const componentModule = angular.module('app.component', []);

componentModule.constant("_path", config._path);

// loading components, services, directives, specific to this module.
componentModule.component('login', loginComponent);

// export this module
export default componentModule;
