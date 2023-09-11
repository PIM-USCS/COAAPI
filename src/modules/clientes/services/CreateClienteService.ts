import { getCustomRepository } from "typeorm";
import Clientes from "../typeorm/entities/Clientes";
import { ClienteRepository } from "../typeorm/repositories/ClienteRepository";

interface IRequest {
  cpf: string;
  rg: string;
  nome: string;
  telefone: string;
  email: string;
  id_empresa: string;
}

class CreateClienteService {
  public async execute({
    cpf,
    rg,
    nome,
    telefone,
    email,
    id_empresa,
  }: IRequest): Promise<Clientes> {
    const clientesRepository = getCustomRepository(ClienteRepository);

    const cliente = await clientesRepository.create({
      cpf,
      rg,
      nome,
      telefone,
      email,
      id_empresa,
    });

    await clientesRepository.save(cliente);
    return cliente;
  }
}

export default CreateClienteService;
