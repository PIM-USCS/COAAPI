import { Request, Response } from 'express'
import ListRegimeService from '../services/ListRegimeService'
import ShowRegimeService from '../services/ShowRegimeService'
import CreateRegimeService from '../services/CreateRegimeService'
import UpdateRegimeService from '../services/UpdateRegimeService'
import DeleteRegimeService from '../services/DeleteRegimeService'

export default class RegimeController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const listRegime = new ListRegimeService()

      const regime = await listRegime.execute()

      return response.json(regime)
    } catch (error) {
      console.error(error)
      return response.status(500).json()
    }
  }
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      {
        const { id } = request.params
        const showCliente = new ShowRegimeService()

        const regime = await showCliente.execute({ id })
        return response.json(regime)
      }
    } catch (error) {
      console.error(error)
      return response.status(500).json()
    }
  }
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { descricao } = request.body
      const { id } = request.params
      const createCliente = new CreateRegimeService()

      const regime = await createCliente.execute({
        descricao,
        id,
      })
      return response.json(regime)
    } catch (error) {
      console.error(error)
      return response.status(500).json()
    }
  }
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { descricao } = request.body

      const { id } = request.params

      const updateCliente = new UpdateRegimeService()
      const regime = await updateCliente.execute({
        descricao,
        id,
      })

      return response.json(regime)
    } catch (error) {
      console.error(error)
      return response.status(500).json()
    }
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const deleteRegime = new DeleteRegimeService()
      await deleteRegime.execute({ id })
    } catch (error) {
      console.error(error)
      return response.status(500).json()
    }
    return response.json([])
  }
}
