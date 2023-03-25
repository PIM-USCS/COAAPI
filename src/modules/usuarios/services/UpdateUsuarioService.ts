import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Usuario from "../typeorm/entities/Usuario";
import UsuariosRepostiroy from "../typeorm/repositories/UsuariosRepository";

interface IRequest {
  id: string;
  nome: string;
  senha: string;
  avatar: string;
}

class UpdateUsuarioService {
  public async execute({
    nome,
    senha,
    avatar,
    id,
  }: IRequest): Promise<Usuario> {
    const usuariosRepository = getCustomRepository(UsuariosRepostiroy);

    const usuarios = await usuariosRepository.findOne(id);

    if (!usuarios) {
      throw new AppError("Cliente não encontrado.");
    }

    usuarios.nome = nome;
    usuarios.senha = senha;
    usuarios.avatar = avatar;

    await usuariosRepository.save(usuarios);
    return usuarios;
  }
}

export default UpdateUsuarioService;
