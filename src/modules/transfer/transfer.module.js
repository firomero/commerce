import TransferController from './controller/transfer.controller';
import TransferModalController from './controller/transfer-modal.controller';

const TransferModule = angular.module('app.transfer', []);

TransferModule.controller('TransferModalController', TransferModalController);
TransferModule.controller('TransferController', TransferController);

// export this module
export default TransferModule;
