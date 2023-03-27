import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class regime1679719857650 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "regime",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "descricao",
            type: "string",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },

          {
            name: "update_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
