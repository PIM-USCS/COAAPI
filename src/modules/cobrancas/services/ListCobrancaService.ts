import { getCustomRepository } from "typeorm";
import { Cobranca } from "../typeorm/entities/Cobrancas";
import { CobrancaRepository } from "../typeorm/repositories/CobrancaRepository";

class ListCobrancaService {
  public async execute(): Promise<Cobranca[]> {
    const cobrancasRepository = getCustomRepository(CobrancaRepository);

    const cobrancas = await cobrancasRepository.find();

    return cobrancas;
  }
}

export default ListCobrancaService;
