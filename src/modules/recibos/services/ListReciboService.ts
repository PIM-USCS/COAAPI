import { getCustomRepository } from 'typeorm'
import { Recibo } from '../typeorm/entities/Recibos'
import { ReciboRepository } from '../typeorm/repositories/ReciboRepository'

class ListReciboService {
  public async execute(): Promise<Recibo[]> {
    const recibosRepository = getCustomRepository(ReciboRepository)

    const recibos = await recibosRepository.find()

    return recibos
  }
}

export default ListReciboService
