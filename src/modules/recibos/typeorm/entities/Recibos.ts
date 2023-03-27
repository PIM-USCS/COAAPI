import { Cobranca } from "../../../../modules/cobrancas/typeorm/entities/Cobrancas";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";

@Entity()
export class Recibo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data_recibo: Date;

  @Column()
  mimeType: string;

  @Column("blob")
  data: Buffer;

  @ManyToOne(() => Cobranca, (cobranca) => cobranca.id)
  cobranca: Cobranca;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
