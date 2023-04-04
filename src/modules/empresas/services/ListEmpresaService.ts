import { getCustomRepository } from "typeorm";
import Empresa from "../typeorm/entities/Empresa";
import { EmpresaRepository } from "../typeorm/repositories/EmpresasRepository";

class ListEmpresaService {
  public async execute(): Promise<Empresa[]> {
    const empresasRepository = getCustomRepository(EmpresaRepository);

    const empresas = await empresasRepository.find();

    return empresas;
  }
}

export default ListEmpresaService;
