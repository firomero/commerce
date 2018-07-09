import routerHelperService from './router-helper/router-helper.service';
import UserService from './services/user.service'; 
import inputFocusDirective from './directives/input-focus/input-focus.directive';

const coreModule = angular.module('app.core', [
	'ui.router'
]);

// inject services, config, filters and re-usable code
// which can be shared via all modules
coreModule.config(routerHelperService);

coreModule.service('UserService', UserService);

coreModule.directive('inputFocus', inputFocusDirective);

export default coreModule;