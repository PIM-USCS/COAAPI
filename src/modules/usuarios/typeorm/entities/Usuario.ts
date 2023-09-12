import Empresa from "../../../empresas/typeorm/entities/Empresa";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity("usuarios")
class Usuario {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  tipo_usuario: string;

  @Column()
  avatar: string;

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

export default Usuario;
