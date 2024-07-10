import { Schema } from 'mongoose';

export type TProduct = {
  title: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  image: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
};
