import type { PaymentMethods } from './PaymentMethods';

export type BookingDetailsForm = {
  notes: string;
  paymentMethod: PaymentMethods;
};