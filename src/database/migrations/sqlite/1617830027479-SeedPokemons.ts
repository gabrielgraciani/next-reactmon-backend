import { MigrationInterface, QueryRunner } from 'typeorm';

import SeedPokemons from '../../seeds/pokemons.seed';

export default class SeedPokemons1617830027479 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    let data = '';

    SeedPokemons.forEach(seed => {
      data = `${data} ('${seed.name}', '${seed.weight}', '${seed.height}', '${seed.mainType}', '${seed.types}', '${seed.weakness}', '${seed.image}'),`;
    });

    const dataSlice = data.slice(0, -1);

    const query = `INSERT INTO pokemons (name, weight, height, main_type, types, weakness, image) VALUES ${dataSlice};`;

    await queryRunner.query(query);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const query = 'DELETE FROM pokemons';
    await queryRunner.query(query);
  }
}
