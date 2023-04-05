import { getCustomRepository } from "typeorm";
import ColaboradorRepostiroy from "../typeorm/repositories/ColaboradorRepository";

interface IRequest {
  id: string;
}

class DeleteColaboradorService {
  public async execute({ id }: IRequest): Promise<void> {
    const colaboradorRepository = getCustomRepository(ColaboradorRepostiroy);

    const colaborador = await colaboradorRepository.findOne(id);

    if (!colaborador) {
      throw new Error("Colaborador não encontrado.");
    }

    await colaboradorRepository.remove(colaborador);
  }
}

export default DeleteColaboradorService;
