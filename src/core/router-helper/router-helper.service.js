import appRoutes from './app-routes';

export default function routerHelper($stateProvider, $urlRouterProvider, $locationProvider) {
	'ngInject';

	$locationProvider.html5Mode(true); // setting html5 mode to remove !# from url

	appRoutes.forEach((route) => {
		$stateProvider.state(route);
		if (route.children) {
			route.children.forEach((routeChildren) => {
				$stateProvider.state(routeChildren);
			});
		}
	});

	$urlRouterProvider.otherwise('/login'); // setting default route
}
