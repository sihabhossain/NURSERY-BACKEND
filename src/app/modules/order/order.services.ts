import { TOrder } from './order.interface';
import { Order } from './order.model';

// create product
const createOrderIntoDB = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
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
