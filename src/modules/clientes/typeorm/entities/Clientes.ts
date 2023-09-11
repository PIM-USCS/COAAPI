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

  @Column()
  id_empresa: string;

  @ManyToOne(() => Empresa, (empresa) => empresa.id)
  @JoinColumn({ name: "id_empresa" })
  empresa: Empresa;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export default Clientes;
