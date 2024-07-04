import type { Gender } from './Gender';
import type { PaymentMethods } from './PaymentMethods';

export type Booking = {
  id: string;
  travelId: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: Gender;
  paymentMethod: PaymentMethods;
  notes?: string;
};
