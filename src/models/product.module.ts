import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoryEntity } from './category.module';

@Entity('products', { schema: 'ventas' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;
  @UpdateDateColumn({
    name: 'Update_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
  @DeleteDateColumn({
    name: 'create_at',
    type: 'timestamp',
    nullable: true,
  })
  deleteAt: Date;

  @Column('varchar', {
    name: 'title',
    nullable: false,
    comment: 'Nombre del producto',
  })
  title: string;
  @Column('number', {
    name: 'price',
    nullable: false,
    comment: 'Precio del producto',
  })
  price: number;
  @Column('varchar', {
    name: 'description',
    nullable: false,
    comment: 'Description of pruduct',
  })
  description: string;
  @Column('varchar', {
    name: 'image',
    nullable: false,
    comment: 'Imagen producto',
  })
  image: string;
  @Column('number', {
    name: 'category',
    nullable: false,
    comment: 'Categoria a la que pertenece el producto',
  })
  category: CategoryEntity;
}
