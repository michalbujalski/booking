import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { TravelsService } from './travels.service';

@Controller('travels')
export class TravelsController {
  constructor(private travelsService: TravelsService) {}
  @Post('/')
  @HttpCode(201)
  create(@Body() data) {
    const newId = this.travelsService.create(data);
    return {
      id: newId,
    };
  }
  @Get('/')
  getAll() {
    return this.travelsService.getAll();
  }
}
