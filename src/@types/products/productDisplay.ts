export interface ProductDisplayProps {
  selectedCategory: string | null;
}

export interface ProductType {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  [key: string]: any;
}