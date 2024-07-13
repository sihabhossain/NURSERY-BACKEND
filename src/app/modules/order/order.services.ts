import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (payload: TOrder) => {
  // Start a session to ensure atomicity (either both operations succeed or fail)
  const session = await Order.startSession();
  session.startTransaction();

  try {
    // Create the order
    const result = await Order.create(payload);

    // Reduce stock for each product in the order
    for (const { productId, quantity } of payload.products) {
      await Product.updateOne(
        { _id: productId },
        { $inc: { stock: -quantity } },
        { session },
      );
    }

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    return result;
  } catch (error) {
    // If an error occurs, abort the transaction
    await session.abortTransaction();
    session.endSession();
    throw error; // Throw the error to be handled by the caller
  }
};

// get all products
const getAllOrders = async () => {
  const result = await Order.find();
  return result;
};

// find product
const findOrderById = async (orderId: string) => {
  const result = await Order.findOne({ _id: orderId });
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrders,
  findOrderById,
};
