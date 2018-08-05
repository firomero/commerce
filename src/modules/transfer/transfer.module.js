import TransferController from './controller/transfer.controller';
// import CheckDetailController from './controller/check-detail.controller';

const TransferModule = angular.module('app.transfer', []);

// InvestmentModule.controller('CheckDetailController', CheckDetailController);
TransferModule.controller('TransferController', TransferController);

// export this module
export default TransferModule;
