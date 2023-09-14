import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class empresa1680622769181 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "empresas",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "tipo_cliente",
            type: "varchar",
          },
          {
            name: "regime",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "cnpj",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "ie",
            type: "varchar",
            isNullable: true,
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
            name: "nome",
            type: "string",
          },
          {
            name: "cep",
            type: "varchar",
          },
          {
            name: "rua",
            type: "string",
          },
          {
            name: "cidade",
            type: "string",
          },
          {
            name: "uf",
            type: "string",
          },
          {
            name: "bairro",
            type: "string",
          },
          {
            name: "numero",
            type: "varchar",
          },
          {
            name: "complemento",
            type: "string",
            isNullable: true,
          },
          {
            name: "id_colaborador",
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
        foreignKeys: [
          {
            name: "id_colaborador",
            referencedTableName: "colaborador",
            referencedColumnNames: ["id"],
            columnNames: ["id_colaborador"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("empresas");
  }
}
