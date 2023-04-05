import AppError from "@shared/errors/AppError";
import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";

import ColaboradorRepostiroy from "../typeorm/repositories/ColaboradorRepository";
import Colaborador from "../typeorm/entities/Colaborador";

interface IRequest {
  nome: string;
  senha: string;
  email: string;
}

class CreateColaboradorService {
  public async execute({ email, nome, senha }: IRequest): Promise<Colaborador> {
    const colaboradorRepository = getCustomRepository(ColaboradorRepostiroy);
    const colaboradorExists = await colaboradorRepository.findById(nome);

    if (colaboradorExists) {
      throw new AppError("Já existe um colaborador com este nome");
    }

    const hashedSenha = await hash(senha, 8);

    const colaborador = colaboradorRepository.create({
      nome,
      senha: hashedSenha,
      email,
    });

    await colaboradorRepository.save(colaborador);
    return colaborador;
  }
}

export default CreateColaboradorService;
