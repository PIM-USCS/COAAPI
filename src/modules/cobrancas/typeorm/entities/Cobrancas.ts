import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Cobranca {
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
