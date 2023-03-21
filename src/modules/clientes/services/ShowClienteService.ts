import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Clientes from "../typeorm/entities/Clientes";
import { ClienteRepository } from "../typeorm/repositories/ClienteRepository";

interface IRequest {
  id: string;
}

class ShowClienteService {
  public async execute({ id }: IRequest): Promise<Clientes> {
    const clientesRepository = getCustomRepository(ClienteRepository);

    const clientes = await clientesRepository.findOne(id);

    if (!clientes) {
      throw new AppError("Cliente não encontrado");
    }
    return clientes;
  }
}
export default ShowClienteService;
