import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Usuario from "../typeorm/entities/Usuario";
import UsuariosRepostiroy from "../typeorm/repositories/UsuariosRepository";
import path from "path";
import fs from "fs";
import uploadConfig from "@config/upload";

interface IRequest {
  usuario_id: string;
  avatarFilename: string;
}

class UpdateUsuarioAvatarService {
  public async execute({
    usuario_id,
    avatarFilename,
  }: IRequest): Promise<Usuario> {
    const usuariosRepository = getCustomRepository(UsuariosRepostiroy);

    const usuario = await usuariosRepository.findById(usuario_id);

    if (!usuario) {
      throw new AppError("Usuário não encontrado");
    }

    if (usuario.avatar) {
      const userAvatarFilePath = path.join(
        uploadConfig.directory,
        usuario.avatar
      );
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    usuario.avatar = avatarFilename;

    await usuariosRepository.save(usuario);

    return usuario;
  }
}

export default UpdateUsuarioAvatarService;
