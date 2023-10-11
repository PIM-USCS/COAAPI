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
  public async findByCPF(cpf: string): Promise<Clientes | undefined> {
    const cliente = await this.findOne({ where: { cpf } });
    return cliente;
  }
}
