import { TProduct } from './product.interface';
import { Product } from './product.model';

// create product
const createProductIntoDB = async (payload: TProduct) => {
  const existingProduct = await Product.findOne({ title: payload.title });

  if (existingProduct) {
    throw new Error('Product with this title already exists');
  }

  const result = await Product.create(payload);
  return result;
};

const getAllProducts = async (searchQuery?: string) => {
  let filter = {};

  if (searchQuery) {
    filter = {
      $or: [
        { title: { $regex: searchQuery, $options: 'i' } },
        { description: { $regex: searchQuery, $options: 'i' } },
      ],
    };
  }

  const result = await Product.find(filter);
  return result;
};

// find product
const findProductById = async (productId: string) => {
  const result = await Product.findOne({ _id: productId });
  return result;
};

// update product
const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

// delete product
const deleteProductById = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProducts,
  findProductById,
  updateProductIntoDB,
  deleteProductById,
};
