import { getCustomRepository } from "typeorm";
import { Recibos } from "../typeorm/entities/Recibos";
import { ReciboRepository } from "../typeorm/repositories/ReciboRepository";

interface IRequest {
  cobranca_id: string;
  data_recibo: string;
  arquivo: string;
}

class CreateReciboService {
  public async execute({
    cobranca_id,
    data_recibo,
    arquivo,
  }: IRequest): Promise<any> {
    const reciboRepository = getCustomRepository(ReciboRepository);

    const recibo = reciboRepository.create({
      arquivo,
      cobranca_id,
      data_recibo,
    });
    await reciboRepository.save(recibo);
    return;
  }
}

export default CreateReciboService;
