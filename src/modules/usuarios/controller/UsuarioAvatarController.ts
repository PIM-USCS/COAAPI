import { Request, Response } from 'express'
import CreateUsuarioService from '../services/CreateUsuarioService'
import UpdateUsuarioAvatarService from '../services/UpdateUsuarioAvatarService'

export default class UsuarioAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateAvatar = new UpdateUsuarioAvatarService()

    const usuarios = updateAvatar.execute({
      usuario_id: request.params.usuario_id,
      avatarFilename: request.file?.filename as string,
    })
  }
}
