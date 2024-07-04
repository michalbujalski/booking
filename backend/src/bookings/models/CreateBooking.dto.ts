import { Booking } from './Bookings.interface';

export type CreateBookingDto = Omit<Booking, 'id'>;
