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

@Entity()
export class Cobrancas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vencimento_cobranca: string;

  @Column()
  emissao_cobranca: string;

  @Column()
  valor: string;

  @Column()
  status: string;

  @Column()
  arquivo: string;

  @Column()
  id_empresa: string;

  @Column()
  descricao: string;

  @ManyToOne(() => Empresa, (empresa) => empresa.id)
  @JoinColumn({ name: "id_empresa" })
  empresa: Empresa;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
