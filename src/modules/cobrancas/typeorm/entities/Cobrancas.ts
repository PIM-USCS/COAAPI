import { Recibo } from "../../../../modules/recibos/typeorm/entities/Recibos";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

@Entity()
export class Cobranca {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vencimento_cobranca: Date;

  @Column()
  emissao_cobranca: Date;

  @Column()
  mimeType: string;

  @Column("blob")
  data: Buffer;

  @OneToMany(() => Recibo, (recibo) => recibo.id)
  recibo: Recibo[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
