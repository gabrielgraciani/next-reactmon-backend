import { MigrationInterface, QueryRunner } from 'typeorm';

import SeedItems from '../../seeds/items.seed';

export default class SeedItems1617980909933 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    let data = '';

    SeedItems.forEach(seed => {
      data = `${data} ('${seed.name}', '${seed.description}', '${seed.function}', '${seed.image}'),`;
    });

    const dataSlice = data.slice(0, -1);

    const query = `INSERT INTO items (name, description, function, image) VALUES ${dataSlice};`;

    await queryRunner.query(query);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const query = 'DELETE FROM items';
    await queryRunner.query(query);
  }
}
