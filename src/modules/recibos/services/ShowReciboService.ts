import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { Recibos } from "../typeorm/entities/Recibos";
import { ReciboRepository } from "../typeorm/repositories/ReciboRepository";

interface IRequest {
  id: string;
}

class ShowReciboService {
  public async execute({ id }: IRequest): Promise<Recibo> {
    const recibosRepository = getCustomRepository(ReciboRepository);

    const recibos = await recibosRepository.findOne(id);

    if (!recibos) {
      throw new AppError("Recibo não encontrado");
    }
    return recibos;
  }
}
export default ShowReciboService;
