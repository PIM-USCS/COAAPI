import { getCustomRepository } from "typeorm";
import Colaborador from "../typeorm/entities/Colaborador";
import ColaboradorRepostiroy from "../typeorm/repositories/ColaboradorRepository";

class ListColaboradorService {
  public async execute(): Promise<Colaborador[]> {
    const colaboradorRepository = getCustomRepository(ColaboradorRepostiroy);

    const colaborador = await colaboradorRepository.find();

    return colaborador;
  }
}

export default ListColaboradorService;
