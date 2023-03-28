import { getCustomRepository } from 'typeorm'
import { ReciboRepository } from '../typeorm/repositories/ReciboRepository'

interface IRequest {
  id: string
}

class DeleteReciboService {
  public async execute({ id }: IRequest): Promise<void> {
    const recibosRepository = getCustomRepository(ReciboRepository)

    const recibo = await recibosRepository.findOne(id)

    if (!recibo) {
      throw new Error('Cobrança não encontrada.')
    }

    await recibosRepository.remove(recibo)
  }
}

export default DeleteReciboService
