import { getCustomRepository } from "typeorm";
import Tiposguia from "../typeorm/entities/Tiposguia";
import { TiposguiaRepository } from "../typeorm/repositories/TiposguiaRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
  id: string;
}

class ShowTiposguiaService {
  public async execute({ id }: IRequest): Promise<Tiposguia> {
    const tiposguiaRepository = getCustomRepository(TiposguiaRepository);

    const tiposguia = await tiposguiaRepository.findOne(id);

    if (!tiposguia) {
      throw new AppError("Tipo de guia não encontrado");
    }

    return tiposguia;
  }
}

export default ShowTiposguiaService;
