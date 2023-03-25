import Clientes from "../../../clientes/typeorm/entities/Clientes";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("regime")
class Regime {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  descricao: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @OneToMany(() => Clientes, (clientes) => clientes.regime)
  clientes: Clientes[];
}

export default Regime;
