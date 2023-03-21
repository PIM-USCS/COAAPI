import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("clientes")
class Clientes {
  @PrimaryColumn()
  id: string;

  @Column()
  tipo_cliente: string;

  @Column()
  regime: string;

  @Column()
  cnpj: string;

  @Column()
  ie: string;

  @Column()
  cpf: string;

  @Column()
  rg: string;

  @Column()
  nome: string;

  @Column()
  cep: string;

  @Column()
  rua: string;

  @Column()
  cidade: string;

  @Column()
  uf: string;

  @Column()
  bairro: string;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export default Clientes;
