export default class UserService {
    
    constructor($resource, $http, $q) {
		'ngInject';

        this.$resource = $resource;
        this.$http = $http;
        this.$q = $q;
	}
    
    login = () => {

        return 'Authenticated';
    };
}