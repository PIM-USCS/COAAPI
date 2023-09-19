import { Cobranca } from "../../../../modules/cobrancas/typeorm/entities/Cobrancas";
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
export class Recibo {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  data_recibo: string;

  @Column()
  cobranca_id: string;

  @Column()
  arquivo: string;

  @ManyToOne(() => Cobranca, (cobranca) => cobranca.id)
  @JoinColumn({ name: "cobranca_id" })
  cobranca: Cobranca;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
