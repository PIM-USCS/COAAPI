import AppError from "@shared/errors/AppError";
import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import Usuario from "../typeorm/entities/Usuario";
import UsuariosRepostiroy from "../typeorm/repositories/UsuariosRepository";

interface IRequest {
  email: string;
  senha: string;
  tipo_usuario: string;
  avatar: string;
  id_empresa: string;
}

class CreateUsuarioService {
  public async execute({
    avatar,
    email,
    senha,
    tipo_usuario,
    id_empresa,
  }: IRequest): Promise<Usuario> {
    const usuariosRepository = getCustomRepository(UsuariosRepostiroy);
    const usuarioExists = await usuariosRepository.findByEmail(email);

    if (usuarioExists) {
      throw new AppError("Já existe um usuario com este email");
    }

    const hashedSenha = await hash(senha, 8);

    const usuario = usuariosRepository.create({
      id_empresa,
      tipo_usuario,
      email,
      senha: hashedSenha,
      avatar,
    });

    await usuariosRepository.save(usuario);
    return usuario;
  }
}

export default CreateUsuarioService;
