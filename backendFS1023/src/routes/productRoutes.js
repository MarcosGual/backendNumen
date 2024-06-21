const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controllers');
const jwtValidate = require('../middlewares/jwtValidate');

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);

router.post('/', productController.createProduct);

router.put('/:id', productController.updateProduct);

router.put('/:id/deactivate', productController.unsuscribeProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;