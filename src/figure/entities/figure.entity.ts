import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Figure {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'numeric'})
  price: number;

  @Column({ type: 'text'})
  image_url: string;
}