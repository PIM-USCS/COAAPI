import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class cobrancas1679922114193 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "cobrancas",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "vencimento_cobranca",
            type: "string",
          },
          {
            name: "emissao_cobranca",
            type: "string",
          },
          {
            name: "valor",
            type: "string",
          },
          {
            name: "status",
            type: "string",
          },
          {
            name: "arquivo",
            type: "varchar",
            isNullable: true,
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

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cobrancas");
  }
}
