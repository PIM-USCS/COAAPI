import Colaborador from "../../../colaborador/typeorm/entities/Colaborador";

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity("empresas")
class Empresa {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  tipo_cliente: string;

  @Column()
  cnpj: string;

  @Column()
  ie: string;

  @Column()
  cpf: string;

  @Column()
  rg: string;

  @Column()
  nome: string;

  @Column()
  cep: string;

  @Column()
  rua: string;

  @Column()
  cidade: string;

  @Column()
  uf: string;
  @Column()
  bairro: string;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @Column()
  id_colaborador: string;

  @ManyToOne(() => Colaborador, (colaborador) => colaborador.id)
  @JoinColumn({ name: "id_colaborador" })
  colaborador: Colaborador;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export default Empresa;
