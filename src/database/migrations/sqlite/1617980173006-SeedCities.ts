import { MigrationInterface, QueryRunner } from 'typeorm';

import SeedCities from '../../seeds/cities.seed';

export default class SeedCities1617980173006 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    let data = '';

    SeedCities.forEach(seed => {
      data = `${data} ('${seed.name}', '${seed.description}', '${seed.image}'),`;
    });

    const dataSlice = data.slice(0, -1);

    const query = `INSERT INTO cities (name, description, image) VALUES ${dataSlice};`;

    await queryRunner.query(query);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const query = 'DELETE FROM cities';
    await queryRunner.query(query);
  }
}
