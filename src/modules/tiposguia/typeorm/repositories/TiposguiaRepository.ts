import { EntityRepository, Repository } from "typeorm";

import Tiposguia from "../entities/Tiposguia";

@EntityRepository(Tiposguia)
export class TiposguiaRepository extends Repository<Tiposguia> {
  public async findById(
    id: string | undefined
  ): Promise<Tiposguia | undefined> {
    const tiposguia = this.findOne({ where: { id } });
    return tiposguia;
  }
}
