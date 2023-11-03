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
            name: "id_empresa",
            type: "varchar",
          },
          {
            name: "descricao",
            type: "varchar",
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
            name: "id_empresa",
            referencedTableName: "empresas",
            referencedColumnNames: ["id"],
            columnNames: ["id_empresa"],
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
