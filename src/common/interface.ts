export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  reviews?: IReview[];
}

export interface IReview {
  id: number;
  review: string;
  rating: number;
}
