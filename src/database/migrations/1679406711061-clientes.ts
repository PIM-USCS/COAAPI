import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class clientes1679406711061 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "clientes",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "nome",
            type: "string",
          },
          {
            name: "cpf",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "rg",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "telefone",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "usuario",
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
            name: "usuario",
            referencedTableName: "usuarios",
            referencedColumnNames: ["id"],
            columnNames: ["usuario"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("clientes");
  }
}
