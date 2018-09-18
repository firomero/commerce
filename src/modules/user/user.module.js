import UserModalController from './controller/user-modal.controller';

const UserModule = angular.module('app.user', []);

UserModule.controller('UserModalController', UserModalController);

// export this module
export default UserModule;
