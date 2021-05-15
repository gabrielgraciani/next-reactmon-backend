import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('items')
class Item {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  function: string;

  @Column()
  image: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Item;
