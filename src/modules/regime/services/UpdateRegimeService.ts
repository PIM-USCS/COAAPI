import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";

import { RegimeRepository } from "../typeorm/repositories/RegimeRepository";
import Regime from "../typeorm/entities/Regime";

interface IRequest {
  id: string;
  descricao: string;
}

class UpdateRegimeService {
  public async execute({ descricao, id }: IRequest): Promise<Regime> {
    const regimeRepository = getCustomRepository(RegimeRepository);

    const regime = await regimeRepository.findById(id);

    if (!regime) {
      throw new AppError("Regime não encontrado.");
    }

    regime.descricao = descricao;

    await regimeRepository.save(regime);
    return regime;
  }
}

export default UpdateRegimeService;
