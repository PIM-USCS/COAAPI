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
            type: "date",
          },
          {
            name: "emissao_cobranca",
            type: "date",
          },
          {
            name: "valor",
            type: "string",
          },
          {
            name: "recibo_id",
            type: "string",
          },
          {
            name: "mimeType",
            type: "varchar",
          },
          {
            name: "data",
            type: "blob",
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
        foreignKeys: [
          {
            name: "recibo_id",
            referencedTableName: "recibos",
            referencedColumnNames: ["id"],
            columnNames: ["recibo_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cobrancas");
  }
}
