import { getCustomRepository } from "typeorm";
import { ClienteRepository } from "../typeorm/repositories/ClienteRepository";

interface IRequest {
  cpf: string;
}

class DeleteClienteService {
  public async execute({ cpf }: IRequest): Promise<void> {
    const clientesRepository = getCustomRepository(ClienteRepository);

    const clientes = await clientesRepository.findOne(cpf);

    if (!clientes) {
      throw new Error("Cliente não encontrado.");
    }

    await clientesRepository.remove(clientes);
  }
}

export default DeleteClienteService;
