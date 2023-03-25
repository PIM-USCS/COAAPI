import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Regime from "../typeorm/entities/Regime";
import { RegimeRepository } from "../typeorm/repositories/RegimeRepository";

interface IRequest {
  id: string;
}

class ShowRegimeService {
  public async execute({ id }: IRequest): Promise<Regime> {
    const regimeRepository = getCustomRepository(RegimeRepository);

    const regime = await regimeRepository.findOne(id);

    if (!regime) {
      throw new AppError("Regime não encontrado");
    }
    return regime;
  }
}
export default ShowRegimeService;
