import type { Booking } from './Booking';

export type BookingForm = Omit<Booking, 'id'>;
