import { Request, Response } from "express";
import UpdateUsuarioAvatarService from "../services/UpdateUsuarioAvatarService";

export default class UsuariosAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const updateAvatar = new UpdateUsuarioAvatarService();

      const usuario = await updateAvatar.execute({
        id,
        avatarFilename: request.file?.filename as string,
      });

      return response.json(usuario);
    } catch (error) {
      console.log(error);
      return response.status(500).json();
    }
  }
}
