import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Colaborador from "../typeorm/entities/Colaborador";
import ColaboradorRepostiroy from "../typeorm/repositories/ColaboradorRepository";

interface IRequest {
  id: string;
  nome: string;
  telefone: string;
}

class UpdateUsuarioService {
  public async execute({ nome, telefone, id }: IRequest): Promise<Colaborador> {
    const colaboradorRepository = getCustomRepository(ColaboradorRepostiroy);

    const colaborador = await colaboradorRepository.findOne(id);

    if (!colaborador) {
      throw new AppError("Colaborador não encontrado.");
    }

    colaborador.telefone = telefone;
    colaborador.nome = nome;

    await colaboradorRepository.save(colaborador);
    return colaborador;
  }
}

export default UpdateUsuarioService;
