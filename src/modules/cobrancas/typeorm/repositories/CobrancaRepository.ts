import { EntityRepository, Repository } from "typeorm";
import { Cobrancas } from "../entities/Cobrancas";

@EntityRepository(Cobrancas)
export class CobrancaRepository extends Repository<Cobrancas> {
  public async findById(
    id: string | undefined
  ): Promise<Cobrancas | undefined> {
    const cobranca = this.findOne({ where: { id } });
    return cobranca;
  }
}
