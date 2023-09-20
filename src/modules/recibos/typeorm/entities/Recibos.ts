import { Cobrancas } from "../../../../modules/cobrancas/typeorm/entities/Cobrancas";
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
export class Recibos {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  data_recibo: string;

  @Column()
  cobranca_id: string;

  @Column()
  arquivo: string;

  @ManyToOne(() => Cobrancas, (cobrancas) => cobrancas.id)
  @JoinColumn({ name: "cobranca_id" })
  cobrancas: Cobrancas;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
