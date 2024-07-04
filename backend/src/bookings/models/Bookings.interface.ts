import { Gender } from './Gender';

export type Booking = {
  id: string;
  travelId: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: Gender;
  paymentMethod: string;
  notes?: string;
};
