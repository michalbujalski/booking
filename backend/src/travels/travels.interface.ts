export interface Travel {
  id: string;
  title: string;
  description: string;
  departureDate: string;
  returnDate: string;
  price: number;
  rating: number;
  image?: string | null;
}
