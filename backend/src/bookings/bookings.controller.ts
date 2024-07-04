import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './models/CreateBooking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}
  @Get('/')
  findAll() {
    return this.bookingsService.findAll();
  }

  @Post('/')
  @HttpCode(201)
  create(@Body() data: CreateBookingDto) {
    const booking = this.bookingsService.create(data);
    return booking;
  }
}
