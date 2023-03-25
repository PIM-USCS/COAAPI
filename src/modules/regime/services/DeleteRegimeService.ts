import { getCustomRepository } from "typeorm";
import { RegimeRepository } from "../typeorm/repositories/RegimeRepository";

interface IRequest {
  id: string;
}

class DeleteRegimeService {
  public async execute({ id }: IRequest): Promise<void> {
    const regimeRepository = getCustomRepository(RegimeRepository);

    const regime = await regimeRepository.findOne(id);

    if (!regime) {
      throw new Error("Regime não encontrado.");
    }

    await regimeRepository.remove(regime);
  }
}

export default DeleteRegimeService;
