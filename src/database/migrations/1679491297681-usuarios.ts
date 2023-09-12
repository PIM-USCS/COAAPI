import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class usuarios1679491297681 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "usuarios",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "senha",
            type: "varchar",
          },
          {
            name: "avatar",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "tipo_usuario",
            type: "varchar",
          },
          {
            name: "id_empresa",
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
    await queryRunner.dropTable("usuarios");
  }
}
