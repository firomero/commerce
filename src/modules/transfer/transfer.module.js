import TransferController from './controller/transfer.controller';
import TransferModalController from './controller/transfer-modal.controller';
import TransferAuthorizeController from './controller/transfer-authorize-modal';

const TransferModule = angular.module('app.transfer', []);

TransferModule.controller('TransferModalController', TransferModalController);
TransferModule.controller('TransferController', TransferController);
TransferModule.controller('TransferAuthorizeController', TransferAuthorizeController);

// export this module
export default TransferModule;
