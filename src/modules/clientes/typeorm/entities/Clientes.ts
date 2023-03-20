import Pedido from "../../../../modules/pedidos/typeorm/entities/Pedido";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import Item from "../../../../modules/itens/typeorm/entities/Item";

@Entity("clientes")
class Clientes {
  @PrimaryColumn()
  cpf: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  cep: string;

  @Column()
  rua: string;

  @Column()
  cidade: string;

  @Column()
  bairro: string;

  @Column()
  uf: string;

  @Column()
  numero: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @OneToMany(() => Pedido, (pedidos) => pedidos.cliente)
  pedidos: Pedido[];

  @OneToMany(() => Item, (itens) => itens.clientes)
  itens: Item[];
  static cpf: any;
}

export default Clientes;
