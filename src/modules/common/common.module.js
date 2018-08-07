import RouterHelperService from './router-helper/router-helper.service';

import CurrencyFilter from './filters/currency.filter';

import UserService from './services/user.service';
import CompanyService from './services/company.service';
import MoneyChangeService from './services/money.change.service';
import BankService from './services/bank.service';
import ContactService from './services/contact.service';

import InputFocusDirective from './directives/input-focus/input-focus.directive';
import AutoFocusDirective from './directives/auto-focus/auto-focus.directive';
import PerfectScrollDirective from './directives/perfect-scroll/perfect-scroll.directive';
import AccountListDirective from './directives/account-list/account-list.directive';
import MenuDirective from './directives/menu/menu.directive';
import KnobDirective from './directives/knob/knob.directive';
import FirmDirective from './directives/firm/firm.directive';
import StatusDirective from './directives/status/status.directive';
import AproveDirective from './directives/aprove/aprove.directive';

import MessageConfirmController from './components/message-confirm/message-confirm.controller';
import FirmDetailController from './directives/firm/firm-detail/firm-detail.controller';
import StatusDetailController from './directives/status/status-detail/status-detail.controller';

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
commonModule.service('BankService', BankService);
commonModule.service('ContactService', ContactService);

commonModule.controller('StatusDetailController', StatusDetailController);
commonModule.controller('FirmDetailController', FirmDetailController);

commonModule.directive('inputFocus', InputFocusDirective);
commonModule.directive('autoFocus', AutoFocusDirective);
commonModule.directive('perfectScroll', PerfectScrollDirective);
commonModule.directive('accountList', AccountListDirective);
commonModule.directive('menu', MenuDirective);
commonModule.directive('knob', KnobDirective);
commonModule.directive('firm', FirmDirective);
commonModule.directive('status', StatusDirective);
commonModule.directive('aprove', AproveDirective);

commonModule.controller('MessageConfirmController', MessageConfirmController);

export default commonModule;