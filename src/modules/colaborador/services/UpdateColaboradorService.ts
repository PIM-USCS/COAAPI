import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Colaborador from "../typeorm/entities/Colaborador";
import ColaboradorRepostiroy from "../typeorm/repositories/ColaboradorRepository";

interface IRequest {
  id: string;
  nome: string;
  senha: string;
  email: string;
}

class UpdateUsuarioService {
  public async execute({
    nome,
    senha,
    email,
    id,
  }: IRequest): Promise<Colaborador> {
    const colaboradorRepository = getCustomRepository(ColaboradorRepostiroy);

    const colaborador = await colaboradorRepository.findOne(id);

    if (!colaborador) {
      throw new AppError("Colaborador não encontrado.");
    }

    colaborador.nome = nome;
    colaborador.senha = senha;
    colaborador.email = email;

    await colaboradorRepository.save(colaborador);
    return colaborador;
  }
}

export default UpdateUsuarioService;
