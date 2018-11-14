import UserModalController from './controller/user-modal.controller';
import ReglaModalController from './controller/regla-modal.controller';
import UserController from './controller/user.controller';

const UserModule = angular.module('app.user', []);

UserModule.controller('UserModalController', UserModalController);
UserModule.controller('ReglaModalController', ReglaModalController);
UserModule.controller('UserController', UserController);

// export this module
export default UserModule;
