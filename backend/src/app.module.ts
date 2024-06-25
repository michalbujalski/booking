import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TravelsController } from './travels/travels.controller';
import { TravelsService } from './travels/travels.service';

@Module({
  imports: [],
  controllers: [AppController, TravelsController],
  providers: [AppService, TravelsService],
})
export class AppModule {}
