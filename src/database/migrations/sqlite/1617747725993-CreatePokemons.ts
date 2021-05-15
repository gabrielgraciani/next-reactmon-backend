import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreatePokemons1617747725993 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pokemons',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true,
            unsigned: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'weight',
            type: 'varchar',
          },
          {
            name: 'height',
            type: 'varchar',
          },
          {
            name: 'main_type',
            type: 'varchar',
          },
          {
            name: 'types',
            type: 'varchar',
          },
          {
            name: 'weakness',
            type: 'varchar',
          },
          {
            name: 'image',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: "datetime('now')",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pokemons');
  }
}
