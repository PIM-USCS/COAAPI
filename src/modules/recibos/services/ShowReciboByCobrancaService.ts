import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { Recibos } from "../typeorm/entities/Recibos";
import { ReciboRepository } from "../typeorm/repositories/ReciboRepository";

interface IRequest {
  cobranca_id: string;
}

class ShowReciboService {
  public async execute({ cobranca_id }: IRequest): Promise<Recibos[]> {
    const recibosRepository = getCustomRepository(ReciboRepository);

    const recibos = await recibosRepository.findByCobranca(cobranca_id);

    if (!recibos) {
      throw new AppError("Recibo não encontrado");
    }

    return recibos;
  }
}

export default ShowReciboService;
