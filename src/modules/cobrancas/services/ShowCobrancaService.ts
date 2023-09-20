import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { Cobrancas } from "../typeorm/entities/Cobrancas";
import { CobrancaRepository } from "../typeorm/repositories/CobrancaRepository";

interface IRequest {
  id: string;
}

class ShowCobrancaService {
  public async execute({ id }: IRequest): Promise<Cobrancas> {
    const cobrancasRepository = getCustomRepository(CobrancaRepository);

    const cobrancas = await cobrancasRepository.findOne(id);

    if (!cobrancas) {
      throw new AppError("Cobranca não encontrada");
    }
    return cobrancas;
  }
}
export default ShowCobrancaService;
