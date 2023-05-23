import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/products')
  getAllProducts() {
    return this.appService.getAllProducs();
  }

  @Get('api/products/:id')
  getProduct(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.appService.getProduct(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Post('api/products')
  postProduct(): string[] {
    return this.appService.postProducts();
  }
}
