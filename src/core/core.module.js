import routerHelperService from './router-helper/router-helper.service';
import UserService from './services/user.service';
import CompanyService from './services/company.service'; 
import inputFocusDirective from './directives/input-focus/input-focus.directive';
import perfectScrollDirective from './directives/perfect-scroll/perfect-scroll.directive';

const coreModule = angular.module('app.core', [
	'ui.router'
]);

// inject services, config, filters and re-usable code
// which can be shared via all modules
coreModule.config(routerHelperService);

coreModule.service('UserService', UserService);
coreModule.service('CompanyService', CompanyService);

coreModule.directive('inputFocus', inputFocusDirective);
coreModule.directive('perfectScroll', perfectScrollDirective);

export default coreModule;