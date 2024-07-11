import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  public uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return { url: 'http://localhost:3333/venice.jpeg' };
  }
}
