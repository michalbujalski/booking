import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './models/CreateBooking.dto';
import { Booking } from './models/Bookings.interface';
import { Gender } from './models/Gender';
import { PaymentMethods } from './models/PaymentMethod.interface';

@Injectable()
export class BookingsService {
  private bookings: Booking[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'jd@example.com',
      phone: '+483234123999',
      age: 25,
      gender: Gender.MALE,
      travelId: '1',
      paymentMethod: PaymentMethods.PAYPAL,
    },
    {
      id: '2',
      name: 'Susan Smith',
      email: 'susan.s@gmail.com',
      phone: '+44111222333',
      age: 37,
      gender: Gender.FEMALE,
      travelId: '2',
      paymentMethod: PaymentMethods.CREDIT_CARD,
      notes: 'Allergic to peanuts',
    },
    {
      id: '3',
      name: 'Paul Johnson',
      email: 'Johnson.paul@yahoo.com',
      phone: '+49233344442',
      age: 64,
      travelId: '3',
      gender: Gender.MALE,
      paymentMethod: PaymentMethods.REVOLUT,
      notes: 'Needs wheelchair assistance',
    },
  ];
  create(form: CreateBookingDto): Booking {
    const booking: Booking = {
      id: Date.now().toString(),
      ...form,
    };
    this.bookings.push(booking);
    return booking;
  }
  findAll(): Booking[] {
    return this.bookings;
  }
}
