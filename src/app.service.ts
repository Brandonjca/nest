import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello my nigga';
  }
  getProducts(): string[] {
    return ['Guitarra', 'Instrumento musical'];
  }
}
