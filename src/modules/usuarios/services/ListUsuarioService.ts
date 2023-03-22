import { getCustomRepository } from "typeorm";
import Usuario from "../typeorm/entities/Usuario";
import UsuariosRepostiroy from "../typeorm/repositories/UsuariosRepository";

class ListUsuarioService {
  public async execute(): Promise<Usuario[]> {
    const usuariosRepository = getCustomRepository(UsuariosRepostiroy);

    const usuarios = await usuariosRepository.find();

    return usuarios;
  }
}

export default ListUsuarioService;
