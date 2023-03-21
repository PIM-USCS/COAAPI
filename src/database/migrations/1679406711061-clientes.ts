import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class clientes1679406711061 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    new Table({
      name: "clientes",
      columns: [
        {
          name: "id",
          type: "string",
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
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("clientes");
  }
}
