import { getCustomRepository } from "typeorm";
import { TiposguiaRepository } from "../typeorm/repositories/TiposguiaRepository";

interface IRequest {
  id: string;
}

class DeleteTiposguiaService {
  public async execute({ id }: IRequest): Promise<void> {
    const tiposguiaRepository = getCustomRepository(TiposguiaRepository);

    const tiposguia = await tiposguiaRepository.findOne(id);

    if (!tiposguia) {
      throw new Error("Tipo de guia não encontrado.");
    }

    await tiposguiaRepository.remove(tiposguia);
  }
}

export default DeleteTiposguiaService;
