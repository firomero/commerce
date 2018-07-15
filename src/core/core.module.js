import RouterHelperService from './router-helper/router-helper.service';

import CurrencyFilter from './filters/currency.filter';

import UserService from './services/user.service';
import CompanyService from './services/company.service';
import MoneyChangeService from './services/money.change.service';

import InputFocusDirective from './directives/input-focus/input-focus.directive';
import PerfectScrollDirective from './directives/perfect-scroll/perfect-scroll.directive';

import MessageConfirmController from './components/message-confirm/message-confirm.controller';

const coreModule = angular.module('app.core', [
	'ui.router'
]);

// inject services, config, filters and re-usable code
// which can be shared via all modules
coreModule.config(RouterHelperService);

coreModule.filter('currency', CurrencyFilter);

coreModule.service('MoneyChangeService', MoneyChangeService);
coreModule.service('UserService', UserService);
coreModule.service('CompanyService', CompanyService);

coreModule.directive('inputFocus', InputFocusDirective);
coreModule.directive('perfectScroll', PerfectScrollDirective);

coreModule.controller('MessageConfirmController', MessageConfirmController);

export default coreModule;