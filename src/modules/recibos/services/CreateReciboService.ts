import { getCustomRepository } from "typeorm";
import { Recibo } from "../typeorm/entities/Recibos";
import { ReciboRepository } from "../typeorm/repositories/ReciboRepository";

interface IRequest {
  data_recibo: string;
  cobranca_id: string;
  arquivo: string;
}

class CreateReciboService {
  public async execute({
    data_recibo,
    cobranca_id,
    arquivo,
  }: IRequest): Promise<Recibo> {
    const reciboRepository = getCustomRepository(ReciboRepository);

    const recibo = await reciboRepository.create({
      data_recibo,
      cobranca_id,
      arquivo,
    });

    await reciboRepository.save(recibo);
    return recibo;
  }
}

export default CreateReciboService;
