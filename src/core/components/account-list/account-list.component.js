import controller from './account-list.controller';

export default {
	template: require('./account-list.jade')(),
	controller: controller,
	bindings: {
		dataList: '<'
	}
};
