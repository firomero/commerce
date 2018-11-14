import ProductController from './controller/product.controller';
const ProductModule = angular.module('app.product', []);

// export this module
export default ProductModule;
ProductModule.controller('ProductController', ProductController);