import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Colaborador from "../typeorm/entities/Colaborador";
import ColaboradorRepostiroy from "../typeorm/repositories/ColaboradorRepository";

interface IRequest {
  email: string;
}

class ShowColaboradorByEmailService {
  public async execute({ email }: IRequest): Promise<Colaborador> {
    const colaboradorRepository = getCustomRepository(ColaboradorRepostiroy);

    const colaborador = await colaboradorRepository.findByEmail(email);

    if (!colaborador) {
      throw new AppError("Colaborador não encontrado");
    }
    return colaborador;
  }
}
export default ShowColaboradorByEmailService;
