import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Empresa from "../typeorm/entities/Empresa";
import { EmpresaRepository } from "../typeorm/repositories/EmpresasRepository";

interface IRequest {
  id: string;
  ativa: string;
}

class InativaAtivaEmpresaService {
  public async execute({ id, ativa }: IRequest): Promise<Empresa> {
    const empresasRepository = getCustomRepository(EmpresaRepository);

    const empresas = await empresasRepository.findOne(id);

    if (!empresas) {
      throw new AppError("Empresa não encontrada.");
    }

    empresas.ativa = ativa;

    await empresasRepository.save(empresas);
    return empresas;
  }
}

export default InativaAtivaEmpresaService;
