import { getCustomRepository } from "typeorm";
import Clientes from "../typeorm/entities/Clientes";
import { ClienteRepository } from "../typeorm/repositories/ClienteRepository";

class ListClienteService {
  public async execute(): Promise<Clientes[]> {
    const clientesRepository = getCustomRepository(ClienteRepository);

    const clientes = await clientesRepository.find();

    return clientes;
  }
}

export default ListClienteService;
