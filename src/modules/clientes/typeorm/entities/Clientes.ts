import Empresa from "../../../empresas/typeorm/entities/Empresa";
import Regime from "../../../regime/typeorm/entities/Regime";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("clientes")
class Clientes {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  cpf: string;

  @Column()
  rg: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  // @Column()
  // usuario: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @OneToMany(() => Empresa, (empresas) => empresas.id)
  empresas: Empresa[];
}

export default Clientes;
