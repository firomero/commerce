import ProductController from './controller/product.controller';
import ProductModalController from "./controller/product-modal.controller";

const ProductModule = angular.module('app.product', ['ui.bootstrap']);

// export this module
export default ProductModule;
ProductModule.controller('ProductController', ProductController);
ProductModule.controller('ProductModalController', ProductModalController);
