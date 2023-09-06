import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";

import ColaboradorRepostiroy from "../typeorm/repositories/ColaboradorRepository";
import Colaborador from "../typeorm/entities/Colaborador";

interface IRequest {
  nome: string;
  telefone: string;
}

class CreateColaboradorService {
  public async execute({ telefone, nome }: IRequest): Promise<Colaborador> {
    const colaboradorRepository = getCustomRepository(ColaboradorRepostiroy);
    const colaboradorExists = await colaboradorRepository.findById(nome);

    if (colaboradorExists) {
      throw new AppError("Já existe um colaborador com este nome");
    }

    const colaborador = colaboradorRepository.create({
      nome,
      telefone,
    });

    await colaboradorRepository.save(colaborador);
    return colaborador;
  }
}

export default CreateColaboradorService;
