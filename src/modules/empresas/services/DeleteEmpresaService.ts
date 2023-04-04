import { getCustomRepository } from "typeorm";
import { EmpresaRepository } from "../typeorm/repositories/EmpresasRepository";

interface IRequest {
  id: string;
}

class DeleteEmpresaService {
  public async execute({ id }: IRequest): Promise<void> {
    const empresasRepository = getCustomRepository(EmpresaRepository);

    const empresas = await empresasRepository.findOne(id);

    if (!empresas) {
      throw new Error("Cliente não encontrado.");
    }

    await empresasRepository.remove(empresas);
  }
}

export default DeleteEmpresaService;
