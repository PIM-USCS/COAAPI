import { EntityRepository, Repository } from "typeorm";
import Regime from "../entities/Regime";

@EntityRepository(Regime)
export class RegimeRepository extends Repository<Regime> {
  public async findById(id: string | undefined): Promise<Regime | undefined> {
    const cliente = this.findOne({ where: { id } });
    return cliente;
  }
}
