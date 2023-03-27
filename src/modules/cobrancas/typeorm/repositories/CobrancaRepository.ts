import { EntityRepository, Repository } from "typeorm";
import { Cobranca } from "../entities/Cobrancas";

@EntityRepository(Cobranca)
export class CobrancaRepository extends Repository<Cobranca> {
  public async findById(id: string | undefined): Promise<Cobranca | undefined> {
    const cobranca = this.findOne({ where: { id } });
    return cobranca;
  }
}
