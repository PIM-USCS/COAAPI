import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Empresa from "../typeorm/entities/Empresa";
import { EmpresaRepository } from "../typeorm/repositories/EmpresasRepository";

interface IRequest {
  id: string;
}

class ShowEmpresaService {
  public async execute({ id }: IRequest): Promise<Empresa> {
    const empresasRepository = getCustomRepository(EmpresaRepository);

    const empresas = await empresasRepository.findOne(id);

    if (!empresas) {
      throw new AppError("Empresa não encontrada");
    }
    return empresas;
  }
}
export default ShowEmpresaService;
