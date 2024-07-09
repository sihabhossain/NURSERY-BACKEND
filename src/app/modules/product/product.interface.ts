import { Schema } from 'mongoose';
import { TCategory } from '../category/category.interface';

export type TProduct = {
  title: string;
  price: number;
  description: string;
  category: Schema.Types.ObjectId | TCategory;
  rating: number;
  image: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
};
