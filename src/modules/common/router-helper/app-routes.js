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
			url: 'investment/:id',
			controller: 'InvestmentController',
			controllerAs: '$ctrl',
			template: require('../../investment/view/investment.jade')(),
		},{
			name: 'app.transfer',
			url: 'transfer/:id',
			controller: 'TransferController',
			controllerAs: '$ctrl',
			template: require('../../transfer/view/transfer.jade')(),
		},
			{
				name: 'app.user',
				url: 'user/:id',
				controller: 'UserController',
				template: require('../../user/view/user.jade')(),
			},
			{
				name: 'app.product',
				url: 'product/:id',
				controller: 'ProductController',
				template: require('../../product/view/product.jade')(),
			}
		]
	}
];
