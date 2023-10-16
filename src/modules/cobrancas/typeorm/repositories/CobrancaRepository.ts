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
  public async findByIdEmpresa(id_empresa: string): Promise<Cobrancas[]> {
    const cobrancas = await this.createQueryBuilder("cobranca")
      .where("cobranca.id_empresa = :id_empresa", { id_empresa })
      .getMany();

    return cobrancas;
  }
}
