import AppError from "@shared/errors/AppError";
import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import Usuario from "../typeorm/entities/Usuario";
import UsuariosRepostiroy from "../typeorm/repositories/UsuariosRepository";

interface IRequest {
  nome: string;
  senha: string;
  avatar: string;
}

class CreateUsuarioService {
  public async execute({ avatar, nome, senha }: IRequest): Promise<Usuario> {
    const usuariosRepository = getCustomRepository(UsuariosRepostiroy);
    const usuarioExists = await usuariosRepository.findByNome(nome);

    if (usuarioExists) {
      throw new AppError("Já existe um usuario com este nome");
    }

    const hashedSenha = await hash(senha, 8);

    const usuario = usuariosRepository.create({
      nome,
      senha: hashedSenha,
      avatar,
    });

    await usuariosRepository.save(usuario);
    return usuario;
  }
}

export default CreateUsuarioService;
