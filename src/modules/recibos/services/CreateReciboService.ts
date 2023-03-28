import { getCustomRepository } from 'typeorm'
import { Recibo } from '../typeorm/entities/Recibos'
import { ReciboRepository } from '../typeorm/repositories/ReciboRepository'

interface IRequest {
  data_recibo: Date
  mimeType: string
  data: Buffer
}

class CreateReciboService {
  public async execute({
    mimeType,
    data,
    data_recibo,
  }: IRequest): Promise<Recibo> {
    const reciboRepository = getCustomRepository(ReciboRepository)

    const recibo = await reciboRepository.create({
      mimeType,
      data,
      data_recibo,
    })

    await reciboRepository.save(recibo)
    return recibo
  }
}

export default CreateReciboService
