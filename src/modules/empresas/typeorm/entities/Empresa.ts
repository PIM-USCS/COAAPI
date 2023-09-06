import Clientes from "../../../clientes/typeorm/entities/Clientes";
import Regime from "../../../regime/typeorm/entities/Regime";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity("empresas")
class Empresa {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  tipo_cliente: string;

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

  @Column()
  id_cliente: string;

  @ManyToOne(() => Clientes, (cliente) => cliente.id)
  @JoinColumn({ name: "id_cliente" })
  cliente: Clientes;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export default Empresa;
