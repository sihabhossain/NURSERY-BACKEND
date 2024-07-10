type CustomerDetails = {
  name: string;
  phone: string;
  email: string;
  address: string;
};

type Product = {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  totalPrice: number;
};

export type TOrder = {
  customerDetails: CustomerDetails;
  products: Product[];
  orderTotal: number;
  paymentMethod: string;
  orderStatus: string;
  orderDate: string;
};
