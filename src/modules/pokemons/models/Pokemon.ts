import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('pokemons')
class Pokemon {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  weight: string;

  @Column()
  height: string;

  @Column()
  main_type: string;

  @Column()
  types: string;

  @Column()
  weakness: string;

  @Column()
  image: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Pokemon;
