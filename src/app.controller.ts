import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/products')
  getProducts(): string[] {
    return this.appService.getProducts();
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
