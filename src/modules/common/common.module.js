import RouterHelperService from './router-helper/router-helper.service';

import CurrencyFilter from './filters/currency.filter';

import UserService from './services/user.service';
import CompanyService from './services/company.service';
import MoneyChangeService from './services/money.change.service';

import InputFocusDirective from './directives/input-focus/input-focus.directive';
import PerfectScrollDirective from './directives/perfect-scroll/perfect-scroll.directive';
import AccountListDirective from './directives/account-list/account-list.directive';
import MenuDirective from './directives/menu/menu.directive';
import KnobDirective from './directives/knob/knob.directive';

import MessageConfirmController from './components/message-confirm/message-confirm.controller';

const commonModule = angular.module('app.common', [
	'ui.router'
]);

// inject services, config, filters and re-usable code
// which can be shared via all modules
commonModule.config(RouterHelperService);

commonModule.filter('currency', CurrencyFilter);

commonModule.service('MoneyChangeService', MoneyChangeService);
commonModule.service('UserService', UserService);
commonModule.service('CompanyService', CompanyService);

commonModule.directive('inputFocus', InputFocusDirective);
commonModule.directive('perfectScroll', PerfectScrollDirective);
commonModule.directive('accountList', AccountListDirective);
commonModule.directive('menu', MenuDirective);
commonModule.directive('knob', KnobDirective);

commonModule.controller('MessageConfirmController', MessageConfirmController);

export default commonModule;