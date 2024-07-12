import mongoose, { Schema } from 'mongoose';
import { TOrder } from './order.interface';

const CustomerDetailsSchema: Schema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
});

const ProductSchema: Schema = new Schema({
  productId: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  description: { type: String, required: true },
  category: {
    type: String,
    required: true,
  },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  image: { type: String, required: true },
  stock: { type: Number, required: true },
});

const OrderSchema: Schema = new Schema<TOrder>({
  customerDetails: { type: CustomerDetailsSchema, required: true },
  products: { type: [ProductSchema], required: true },
  orderTotal: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  orderStatus: { type: String, required: true },
});

export const Order = mongoose.model<TOrder>('Order', OrderSchema);
