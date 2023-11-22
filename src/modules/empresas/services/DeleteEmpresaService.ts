import { getCustomRepository } from "typeorm";
import { EmpresaRepository } from "../typeorm/repositories/EmpresasRepository";
import AppError from "../../../shared/errors/AppError";

interface IRequest {
  id: string;
}

class DeleteEmpresaService {
  public async execute({ id }: IRequest): Promise<void> {
    const empresasRepository = getCustomRepository(EmpresaRepository);

    const empresas = await empresasRepository.findOne(id);

    if (!empresas) {
      throw new AppError("Empresa não encontrada.");
    }

    await empresasRepository.remove(empresas);
  }
}

export default DeleteEmpresaService;
