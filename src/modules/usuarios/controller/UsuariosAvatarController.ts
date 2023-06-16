import { Request, Response } from "express";
import UpdateUsuarioAvatarService from "../services/UpdateUsuarioAvatarService";

export default class UsuariosAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const updateAvatar = new UpdateUsuarioAvatarService();

      const usuario = updateAvatar.execute({
        usuario_id: request.usuario?.id as string,
        avatarFilename: request.file?.filename as string,
      });
      return response.json(usuario);
    } catch (error) {
      console.log(error);
      return response.status(500).json();
    }
  }
}
