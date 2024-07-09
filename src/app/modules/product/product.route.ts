import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductControllers } from './product.controllers';

const router = express.Router();

router.post('/', ProductControllers.createProduct);
router.get('/', ProductControllers.getAllProducts);
router.get('/:productId', ProductControllers.findProductById);
router.put('/:productId', ProductControllers.updateProductIntoDB);
router.delete('/:productId', ProductControllers.deleteProductById);

export const ProductRoutes = router;
