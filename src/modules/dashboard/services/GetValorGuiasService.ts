import { Cobrancas } from "../../cobrancas/typeorm/entities/Cobrancas";
import { CobrancaRepository } from "../../cobrancas/typeorm/repositories/CobrancaRepository";
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";

interface IRequest {
  id_empresa: string;
}

class ShowCobrancaByStatusService {
  public async execute({ id_empresa }: IRequest): Promise<Cobrancas[]> {
    const cobrancaRepository = getCustomRepository(CobrancaRepository);

    const cobrancas = await cobrancaRepository.findByIdEmpresa(id_empresa);

    if (!cobrancas || cobrancas.length === 0) {
      throw new AppError("Cobranças não encontradas");
    }

    return cobrancas;
  }
}

export default ShowCobrancaByStatusService;
