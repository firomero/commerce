import InvestmentController from './controller/investment.controller';
import CheckDetailController from './controller/check-detail.controller';

const InvestmentModule = angular.module('app.investment', []);

InvestmentModule.controller('CheckDetailController', CheckDetailController);
InvestmentModule.controller('InvestmentController', InvestmentController);

// export this module
export default InvestmentModule;
