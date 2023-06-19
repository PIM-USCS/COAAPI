import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Usuario from "../typeorm/entities/Usuario";
import UsuariosRepostiroy from "../typeorm/repositories/UsuariosRepository";
import { compare } from "bcryptjs";

interface IRequest {
  id: string;
  nome: string;
}

class UpdateUsuarioService {
  public async execute({ nome, id }: IRequest): Promise<Usuario> {
    const usuariosRepository = getCustomRepository(UsuariosRepostiroy);

    const usuarios = await usuariosRepository.findOne(id);

    if (!usuarios) {
      throw new AppError("Cliente não encontrado.");
    }

    usuarios.nome = nome;

    await usuariosRepository.save(usuarios);
    return usuarios;
  }
}

export default UpdateUsuarioService;
