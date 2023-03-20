import { EntityRepository, Repository } from "typeorm";
import Clientes from "../entities/Clientes";

@EntityRepository(Clientes)
export class ClienteRepository extends Repository<Clientes> {
  public async findByID(cpf: string): Promise<Clientes | undefined> {
    const cliente = this.findOne({ where: { cpf } });
    return cliente;
  }
}
