import { Request, Response } from 'express'
import CreateSessionsService from '../services/CreateSessionsService'

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { nome, senha } = request.body

      const createSession = new CreateSessionsService()

      const usuario = await createSession.execute({
        nome,
        senha,
      })

      return response.json(usuario)
    } catch (error) {
      console.error(error)
      return response.json(error)
    }
  }
}
