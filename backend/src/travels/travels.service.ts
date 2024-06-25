import { Injectable } from '@nestjs/common';
import { Travel } from './travels.interface';
import { CreateTravelDto } from './create-travel.dto';

@Injectable()
export class TravelsService {
  private travels: Travel[] = [
    {
      id: '1',
      title: 'Paris',
      rating: 4.5,
      description: 'The city of love',
      departureDate: '2024-07-01',
      returnDate: '2024-07-15',
      price: 1299.01,
      image: null,
    },
  ];

  create(travelDto: CreateTravelDto): string {
    const id = String(this.travels.length + 1);
    this.travels.push({
      ...travelDto,
      id,
      rating: Math.round(Math.random() * 50),
    });
    return id;
  }

  getDetails(id: string): Travel {
    return this.travels.find((travel) => {
      console.log(travel.id, id, travel.id === id);
      return travel.id === id;
    });
  }

  getAll() {
    return this.travels;
  }
}
