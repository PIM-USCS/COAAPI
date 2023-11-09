import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Tiposguia from "../typeorm/entities/Tiposguia";
import { TiposguiaRepository } from "../typeorm/repositories/TiposguiaRepository";

interface IRequest {
  id: string;
  descricao: string;
}

class UpdateTiposguiaService {
  public async execute({ descricao, id }: IRequest): Promise<Tiposguia> {
    const tiposguiaRepository = getCustomRepository(TiposguiaRepository);

    const tiposguia = await tiposguiaRepository.findOne(id);

    if (!tiposguia) {
      throw new AppError("Tipo de guia não encontrada.");
    }

    tiposguia.descricao = descricao;

    await tiposguiaRepository.save(tiposguia);
    return tiposguia;
  }
}

export default UpdateTiposguiaService;
