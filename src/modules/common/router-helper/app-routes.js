export default [
	{
		name: 'login',
		url: '/login',
		controller: 'LoginController',
		template: require('../../login/view/login.jade')(),
	},{
		name: 'app',
		abstract: true,
		url: '/',
		template: require('../../dashboard/view/layout.jade')(),
		controller: 'LayoutController',
		resolve: {
			userLogin: function(UserService) {
				'ngInject';

				var userLogin = UserService.userLogin();
				return userLogin;
			}
		},
		children: [{
			name: 'app.dashboard',
			url: 'dashboard',
			controller: 'DashboardController',
			template: require('../../dashboard/view/dashboard.jade')(),
		},{
			name: 'app.investment',
			url: 'investment',
			controller: 'InvestmentController',
			template: require('../../investment/view/investment.jade')(),
		}]
	}
];