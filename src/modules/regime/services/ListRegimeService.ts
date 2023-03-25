import { getCustomRepository } from "typeorm";
import Regime from "../typeorm/entities/Regime";
import { RegimeRepository } from "../typeorm/repositories/RegimeRepository";
class ListRegimeService {
  public async execute(): Promise<Regime[]> {
    const regimeRepository = getCustomRepository(RegimeRepository);

    const regime = await regimeRepository.find();

    return regime;
  }
}

export default ListRegimeService;
