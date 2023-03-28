import { getCustomRepository } from "typeorm";
import { CobrancaRepository } from "../typeorm/repositories/CobrancaRepository";

interface IRequest {
  id: string;
}

class DeleteCobrancasService {
  public async execute({ id }: IRequest): Promise<void> {
    const cobrancasRepository = getCustomRepository(CobrancaRepository);

    const cobrancas = await cobrancasRepository.findOne(id);

    if (!cobrancas) {
      throw new Error("Cobrança não encontrada.");
    }

    await cobrancasRepository.remove(cobrancas);
  }
}

export default DeleteCobrancasService;
