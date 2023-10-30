import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Usuario from "../typeorm/entities/Usuario";
import UsuariosRepostiroy from "../typeorm/repositories/UsuariosRepository";
import { compare, hash } from "bcryptjs";

interface IRequest {
  id: string;
  email: string;
  senha: string;
}

class UpdateUsuarioService {
  public async execute({ email, id, senha }: IRequest): Promise<Usuario> {
    const usuariosRepository = getCustomRepository(UsuariosRepostiroy);

    const usuarios = await usuariosRepository.findOne(id);

    if (!usuarios) {
      throw new AppError("Cliente não encontrado.");
    }

    const hashedSenha = await hash(senha, 8);

    usuarios.email = email;
    usuarios.senha = hashedSenha;

    await usuariosRepository.save(usuarios);
    return usuarios;
  }
}

export default UpdateUsuarioService;
