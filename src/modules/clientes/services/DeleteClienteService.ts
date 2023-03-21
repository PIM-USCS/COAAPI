import { getCustomRepository } from "typeorm";
import { ClienteRepository } from "../typeorm/repositories/ClienteRepository";

interface IRequest {
  id: string;
}

class DeleteClienteService {
  public async execute({ id }: IRequest): Promise<void> {
    const clientesRepository = getCustomRepository(ClienteRepository);

    const clientes = await clientesRepository.findOne(id);

    if (!clientes) {
      throw new Error("Cliente não encontrado.");
    }

    await clientesRepository.remove(clientes);
  }
}

export default DeleteClienteService;
