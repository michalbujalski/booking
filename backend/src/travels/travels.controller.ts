import { Controller, Get } from '@nestjs/common';

@Controller('travels')
export class TravelsController {
  @Get('/')
  getAll() {
    return [
      {
        id: 1,
        title: 'Paris',
        description: 'The city of love',
      },
      {
        id: 2,
        title: 'New York',
        description: 'The city that never sleeps',
      },
    ];
  }
}
