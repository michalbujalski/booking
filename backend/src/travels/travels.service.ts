import { Injectable } from '@nestjs/common';
import { Travel } from './travels.interface';
import { CreateTravelDto } from './create-travel.dto';

@Injectable()
export class TravelsService {
  private travels: Travel[] = [];

  create(travelDto: CreateTravelDto): number {
    const id = this.travels.length + 1;
    this.travels.push({
      ...travelDto,
      id,
      rating: Math.round(Math.random() * 50),
    });
    return id;
  }

  getAll() {
    return this.travels;
  }
}
