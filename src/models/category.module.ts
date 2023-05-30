import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('categories', { schema: 'ventas' })
export class CategoryEntity {
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
    name: 'name',
    nullable: false,
    comment: 'Nombre de la categoria',
  })
  name: string;
  @Column('varchar', {
    name: 'description',
    nullable: true,
    comment: 'Description od category',
  })
  description: string;
}
