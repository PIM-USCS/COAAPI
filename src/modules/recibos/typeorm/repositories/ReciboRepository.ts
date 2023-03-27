import { EntityRepository, Repository } from "typeorm";
import { Recibo } from "../entities/Recibos";

@EntityRepository(Recibo)
export class ReciboRepository extends Repository<Recibo> {
  public async findById(id: string | undefined): Promise<Recibo | undefined> {
    const recibo = this.findOne({ where: { id } });
    return recibo;
  }
}
