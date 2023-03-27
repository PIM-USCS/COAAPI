import { getCustomRepository } from "typeorm";
import { Cobranca } from "../typeorm/entities/Cobrancas";
import { CobrancaRepository } from "../typeorm/repositories/CobrancaRepository";

interface IRequest {
  vencimento_cobranca: Date;
  emissao_cobranca: Date;
  recibo: [];
  mimeType: string;
  data: Buffer;
}

class CreateCobrancaService {
  public async execute({
    vencimento_cobranca,
    emissao_cobranca,
    recibo,
    mimeType,
    data,
  }: IRequest): Promise<Cobranca> {
    const cobrancaRepository = getCustomRepository(CobrancaRepository);

    const cobranca = await cobrancaRepository.create({
      vencimento_cobranca,
      emissao_cobranca,
      mimeType,
      data,
      recibo,
    });

    await cobrancaRepository.save(cobranca);
    return cobranca;
  }
}

export default CreateCobrancaService;
