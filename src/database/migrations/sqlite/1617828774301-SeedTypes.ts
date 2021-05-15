import { MigrationInterface, QueryRunner } from 'typeorm';

import SeedTypes from '../../seeds/types.seed';

export default class SeedTypes1617828774301 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    let data = '';

    SeedTypes.forEach(seed => {
      data = `${data} ('${seed.name}'),`;
    });

    const dataSlice = data.slice(0, -1);

    const query = `INSERT INTO types (name) VALUES ${dataSlice};`;

    await queryRunner.query(query);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const query = 'DELETE FROM types';
    await queryRunner.query(query);
  }
}
