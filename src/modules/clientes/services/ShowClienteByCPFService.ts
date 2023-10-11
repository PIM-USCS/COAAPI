import { getCustomRepository } from "typeorm";
import { ClienteRepository } from "../typeorm/repositories/ClienteRepository";
import Clientes from "../typeorm/entities/Clientes";

class ShowClienteByCPFService {
  public async execute({
    cpf,
  }: {
    cpf: string;
  }): Promise<Clientes | undefined> {
    const clienteRepository = getCustomRepository(ClienteRepository);
    const cliente = await clienteRepository.findByCPF(cpf);
    return cliente;
  }
}

export default ShowClienteByCPFService;
