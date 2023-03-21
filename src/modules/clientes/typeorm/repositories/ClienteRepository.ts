import { EntityRepository, Repository } from "typeorm";
import Clientes from "../entities/Clientes";

@EntityRepository(Clientes)
export class ClienteRepository extends Repository<Clientes> {
  public async findByCPF(
    cpf: string | undefined
  ): Promise<Clientes | undefined> {
    const cliente = this.findOne({ where: { cpf } });
    return cliente;
  }

  public async findByCNPJ(
    cnpj: string | undefined
  ): Promise<Clientes | undefined> {
    const cliente = this.findOne({ where: { cnpj } });
    return cliente;
  }
}
