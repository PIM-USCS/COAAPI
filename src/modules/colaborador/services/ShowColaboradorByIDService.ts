import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Colaborador from "../typeorm/entities/Colaborador";
import ColaboradorRepostiroy from "../typeorm/repositories/ColaboradorRepository";

interface IRequest {
  id: string;
}

class ShowColaboradorByIDService {
  public async execute({ id }: IRequest): Promise<Colaborador> {
    const colaboradorRepository = getCustomRepository(ColaboradorRepostiroy);

    const colaborador = await colaboradorRepository.findById(id);

    if (!colaborador) {
      throw new AppError("Colaborador não encontrado");
    }
    return colaborador;
  }
}
export default ShowColaboradorByIDService;
