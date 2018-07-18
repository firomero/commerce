import LayoutController from './controller/layout.controller';
import DashboardController from './controller/dashboard.controller';

const DashboardModule = angular.module('app.dashboard', []);

DashboardModule.controller('LayoutController', LayoutController);
DashboardModule.controller('DashboardController', DashboardController);

// export this module
export default DashboardModule;
