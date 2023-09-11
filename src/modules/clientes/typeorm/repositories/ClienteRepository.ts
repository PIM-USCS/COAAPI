import { EntityRepository, Repository } from "typeorm";
import Clientes from "../entities/Clientes";

@EntityRepository(Clientes)
export class ClienteRepository extends Repository<Clientes> {
  public async findByEmpresa(
    id_empresa: string | undefined
  ): Promise<Clientes | undefined> {
    const cliente = this.findOne({ where: { id_empresa } });
    return cliente;
  }
}
