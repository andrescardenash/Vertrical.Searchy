import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { name: 'title', nullable: false })
  title: string;

  @Column('text', { name: 'photo', nullable: false })
  photo: string;

  @Column('text', { name: 'description', nullable: false })
  description: string;

  @Column('text', { name: 'short_description', nullable: false })
  shortDescription: string;
}
