import type { Booking } from './Booking';
import type { Travel } from '@models/travels/Travel';

export type BookingListItem =
  | Omit<Travel, 'id' | 'rating'>
  | Omit<Booking, 'name'>;
