import { EntityRepository, Repository } from "typeorm";
import Colaborador from "../entities/Colaborador";

@EntityRepository(Colaborador)
class ColaboradorRepostiroy extends Repository<Colaborador> {
  public async findById(id: string): Promise<Colaborador | undefined> {
    const colaborador = await this.findOne({
      where: { id },
    });
    return colaborador;
  }
}

export default ColaboradorRepostiroy;
