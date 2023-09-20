import { getCustomRepository } from "typeorm";
import { Cobrancas } from "../typeorm/entities/Cobrancas";
import { CobrancaRepository } from "../typeorm/repositories/CobrancaRepository";

interface IRequest {
  vencimento_cobranca: string;
  emissao_cobranca: string;
  valor: string;
  status: string;
  arquivo: string;
  id_empresa: string;
}

class CreateCobrancaService {
  public async execute({
    vencimento_cobranca,
    emissao_cobranca,
    valor,
    status,
    arquivo,
    id_empresa,
  }: IRequest): Promise<Cobrancas> {
    const cobrancaRepository = getCustomRepository(CobrancaRepository);

    const cobranca = await cobrancaRepository.create({
      vencimento_cobranca,
      emissao_cobranca,
      valor,
      status,
      arquivo,
      id_empresa,
    });

    await cobrancaRepository.save(cobranca);
    return cobranca;
  }
}

export default CreateCobrancaService;
