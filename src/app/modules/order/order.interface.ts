type CustomerDetails = {
  name: string;
  phone: string;
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
  orderDate: string;
};
