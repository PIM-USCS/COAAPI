import { string } from "joi";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClientes1675275803984 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "clientes",
        columns: [
          {
            name: "cpf",
            type: "string",
            isPrimary: true,
            isUnique: true,
          },

          {
            name: "nome",
            type: "varchar",
          },

          {
            name: "telefone",
            type: "string",
          },
          {
            name: "cep",
            type: "string",
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
            name: "bairro",
            type: "string",
          },
          {
            name: "uf",
            type: "string",
          },
          {
            name: "numero",
            type: "string",
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("clientes");
  }
}
