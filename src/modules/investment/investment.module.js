import InvestmentController from './controller/investment.controller';
// import ForgotController from './controller/forgot.controller';

const InvestmentModule = angular.module('app.investment', []);

// LoginModule.controller('ForgotController', ForgotController);
InvestmentModule.controller('InvestmentController', InvestmentController);

// export this module
export default InvestmentModule;
