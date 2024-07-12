import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { OrderServices } from './order.services';

//create order
const createOrder = catchAsync(async (req, res) => {
  const orderData = req.body;

  const result = await OrderServices.createOrderIntoDB(orderData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Your order has been placed',
    data: result,
  });
});

// get all orders
const getAllOrders = catchAsync(async (req, res) => {
  const result = await OrderServices.getAllOrders();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders retrieved successfully',
    data: result,
  });
});

// find order using id
const findOrderById = catchAsync(async (req, res) => {
  const { orderId } = req.params;

  const result = await OrderServices.findOrderById(orderId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single order retrieved successfully',
    data: result,
  });
});

export const OrderControllers = {
  createOrder,
  getAllOrders,
  findOrderById,
};
