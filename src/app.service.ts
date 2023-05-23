import { Injectable } from '@nestjs/common';
import { ProductDto } from '../src/product.dto';

@Injectable()
export class AppService {
  private products: ProductDto[] = [
    { id: 1, name: 'Brandon', price: 99999 },
    { id: 2, name: 'Pedro', price: 8888 },
    { id: 3, name: 'Angel', price: 7777 },
    { id: 4, name: 'Javier', price: 6666 },
    { id: 5, name: 'Julio', price: 5555 },
  ];

  getHello(): string {
    return 'Hello my nigga';
  }
  getAllProducs() {
    return this.products;
  }
  getProduct(id: number): ProductDto {
    const getOneProduct = this.products.find((product) => product.id === id);
    if (!getOneProduct)
      throw new Error(`Product ${id} no hay mmvrg, crea uno nuevo`);

    return getOneProduct;
  }

  postProducts(): string[] {
    return ['Flauta', 'Instrumento musical'];
  }
}
