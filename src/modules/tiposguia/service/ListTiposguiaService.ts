import { getCustomRepository } from "typeorm";
import Tiposguia from "../typeorm/entities/Tiposguia";
import { TiposguiaRepository } from "../typeorm/repositories/TiposguiaRepository";

class ListTiposguiaService {
  public async execute(): Promise<Tiposguia[]> {
    const tiposguiaRepository = getCustomRepository(TiposguiaRepository);

    const tiposguia = await tiposguiaRepository.find();

    return tiposguia;
  }
}

export default ListTiposguiaService;
