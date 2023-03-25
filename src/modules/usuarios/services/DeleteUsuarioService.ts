import { getCustomRepository } from "typeorm";
import UsuariosRepostiroy from "../typeorm/repositories/UsuariosRepository";

interface IRequest {
  id: string;
}

class DeleteUsuarioService {
  public async execute({ id }: IRequest): Promise<void> {
    const usuariosRepository = getCustomRepository(UsuariosRepostiroy);

    const usuario = await usuariosRepository.findOne(id);

    if (!usuario) {
      throw new Error("Usuário não encontrado.");
    }

    await usuariosRepository.remove(usuario);
  }
}

export default DeleteUsuarioService;
