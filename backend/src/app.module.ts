import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TravelsController } from './travels/travels.controller';

@Module({
  imports: [],
  controllers: [AppController, TravelsController],
  providers: [AppService],
})
export class AppModule {}
