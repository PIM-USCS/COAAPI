import Tiposguia from "../typeorm/entities/Tiposguia";
import { getCustomRepository } from "typeorm";
import { TiposguiaRepository } from "../typeorm/repositories/TiposguiaRepository";

interface IRequest {
  descricao: string;
}

class CreateTiposguiaService {
  public async execute({ descricao }: IRequest): Promise<Tiposguia> {
    const tiposguiaRepository = getCustomRepository(TiposguiaRepository);

    const tiposguia = await tiposguiaRepository.create({
      descricao,
    });

    await tiposguiaRepository.save(tiposguia);
    return tiposguia;
  }
}

export default CreateTiposguiaService;
