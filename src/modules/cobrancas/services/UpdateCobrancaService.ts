import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { Cobrancas } from "../typeorm/entities/Cobrancas";
import { CobrancaRepository } from "../typeorm/repositories/CobrancaRepository";

interface IRequest {
  id: string;
  vencimento_cobranca: string;
  emissao_cobranca: string;
  valor: string;
  status: string;
  id_empresa: string;
}

class UpdateCobrancaService {
  public async execute({
    vencimento_cobranca,
    emissao_cobranca,
    valor,
    status,
    id,
    id_empresa,
  }: IRequest): Promise<Cobrancas> {
    const cobrancaRepository = getCustomRepository(CobrancaRepository);

    const cobranca = await cobrancaRepository.findOne(id);

    if (!cobranca) {
      throw new AppError("Cobranca não encontrado.");
    }

    cobranca.status = status;
    cobranca.valor = valor;
    cobranca.emissao_cobranca = emissao_cobranca;
    cobranca.vencimento_cobranca = vencimento_cobranca;
    cobranca.id_empresa = id_empresa;

    await cobrancaRepository.save(cobranca);
    return cobranca;
  }
}

export default UpdateCobrancaService;
