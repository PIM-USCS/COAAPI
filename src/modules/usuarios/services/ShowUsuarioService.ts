import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Usuario from "../typeorm/entities/Usuario";
import UsuariosRepostiroy from "../typeorm/repositories/UsuariosRepository";

interface IRequest {
  id: string;
}

class ShowUsuarioService {
  public async execute({ id }: IRequest): Promise<Usuario> {
    const usuariosRepository = getCustomRepository(UsuariosRepostiroy);

    const usuarios = await usuariosRepository.findOne(id);

    if (!usuarios) {
      throw new AppError("Usuário não encontrado");
    }
    return usuarios;
  }
}
export default ShowUsuarioService;
