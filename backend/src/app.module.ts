import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TravelsController } from './travels/travels.controller';
import { TravelsService } from './travels/travels.service';
import { BookingsController } from './bookings/bookings.controller';
import { BookingsService } from './bookings/bookings.service';

@Module({
  imports: [],
  controllers: [AppController, TravelsController, BookingsController],
  providers: [AppService, TravelsService, BookingsService],
})
export class AppModule {}
