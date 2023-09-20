import { getCustomRepository } from "typeorm";
import { Recibos } from "../typeorm/entities/Recibos";
import { ReciboRepository } from "../typeorm/repositories/ReciboRepository";

interface IRequest {
  cobranca_id: string;
  recibos: [];
}

class CreateReciboService {
  public async execute({ cobranca_id, recibos }: IRequest): Promise<any> {
    const reciboRepository = getCustomRepository(ReciboRepository);

    await new Promise((resolve) => {
      recibos.map(async ({ data_recibo, arquivo }) => {
        const newRecibo = reciboRepository.create({
          data_recibo,
          arquivo,
          cobranca_id,
        });

        await reciboRepository.save(newRecibo);
      });

      resolve;
    });
    return;
  }
}

export default CreateReciboService;
