export default [
	{
		name: 'login',
		url: '/login',
		component: 'login'
	},{
		name: 'app',
		abstract: true,
		url: '/',
		template: require('../layout/layout.jade')(),
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
			component: 'dashboard'
			// template: 'funciono'
		}]
	}
];
