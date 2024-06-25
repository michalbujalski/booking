import {
  Body,
  Controller,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TravelsService } from './travels.service';
import { CreateTravelDto } from './create-travel.dto';

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

  @Patch('/:id')
  update(@Param('id') id: string, @Body() data: Partial<CreateTravelDto>) {
    this.travelsService.update(id, data);
  }

  @Get('/:id')
  getDetails(@Param('id') id: string) {
    const travel = this.travelsService.getDetails(id);
    if (!travel) {
      throw new NotFoundException(`Could not found travel with id: ${id}`);
    }
    return travel;
  }

  @Get('/')
  getAll() {
    return this.travelsService.getAll();
  }
}
