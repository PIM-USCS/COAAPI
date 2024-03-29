import { EntityRepository, Repository } from "typeorm";
import { Recibos } from "../entities/Recibos";

@EntityRepository(Recibos)
export class ReciboRepository extends Repository<Recibos> {
  public async findById(id: string | undefined): Promise<Recibos | undefined> {
    const recibo = this.findOne({ where: { id } });
    return recibo;
  }
  public async findByCobranca(
    cobranca_id: string | undefined
  ): Promise<Recibos[]> {
    const recibos = this.find({ where: { cobranca_id } });
    return recibos;
  }
}
