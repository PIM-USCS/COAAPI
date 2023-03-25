import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Regime from "../typeorm/entities/Regime";
import { RegimeRepository } from "../typeorm/repositories/RegimeRepository";

interface IRequest {
  id: string;
  descricao: string;
}

class CreateRegimeService {
  public async execute({ descricao, id }: IRequest): Promise<Regime> {
    const regimeRepository = getCustomRepository(RegimeRepository);
    const regimeExist = await regimeRepository.findById(id);

    if (regimeExist) {
      throw new AppError("Já existe um regime com este id");
    }

    const regime = await regimeRepository.create({
      descricao,
    });

    await regimeRepository.save(regime);
    return regime;
  }
}

export default CreateRegimeService;
