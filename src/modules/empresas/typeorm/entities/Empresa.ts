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

  @ManyToOne(() => Regime, (regime) => regime.id)
  @JoinColumn({ name: "regime" })
  regime: Regime;

  @Column()
  regimeID: string;

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
  colaborador: string;

  @ManyToOne(() => Clientes, (cliente) => cliente.id)
  @JoinColumn({ name: "clientesId" })
  cliente: Clientes;

  @Column()
  clientesID: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export default Empresa;
