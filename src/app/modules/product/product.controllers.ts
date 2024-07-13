import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { ProductServices } from './product.services';

//create product
const createProduct = catchAsync(async (req, res) => {
  const productData = req.body;

  const result = await ProductServices.createProductIntoDB(productData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is created successfully',
    data: result,
  });
});

// get all products with optional search
const getAllProducts = catchAsync(async (req, res) => {
  const searchQuery = req.query.searchQuery as string | undefined;

  let result;
  if (searchQuery) {
    result = await ProductServices.getAllProducts(searchQuery);
  } else {
    result = await ProductServices.getAllProducts();
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products retrieved successfully',
    data: result,
  });
});

// find product using id
const findProductById = catchAsync(async (req, res) => {
  const { productId } = req.params;

  const result = await ProductServices.findProductById(productId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single product retrieved successfully',
    data: result,
  });
});

// update product using a id
const updateProductIntoDB = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const productData = req.body;

  const result = await ProductServices.updateProductIntoDB(
    productId,
    productData,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product updated successfully',
    data: result,
  });
});

// delete product using a id
const deleteProductById = catchAsync(async (req, res) => {
  const { productId } = req.params;

  const result = await ProductServices.deleteProductById(productId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product deleted successfully',
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProducts,
  findProductById,
  updateProductIntoDB,
  deleteProductById,
};
