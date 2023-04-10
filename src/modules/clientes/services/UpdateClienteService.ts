import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Clientes from "../typeorm/entities/Clientes";
import { ClienteRepository } from "../typeorm/repositories/ClienteRepository";

interface IRequest {
  id: string;
  cpf: string;
  rg: string;
  nome: string;
  telefone: string;
  email: string;
}

class UpdateClienteService {
  public async execute({
    id,
    cpf,
    rg,
    nome,
    telefone,
    email,
  }: IRequest): Promise<Clientes> {
    const clientesRepository = getCustomRepository(ClienteRepository);

    const clientes = await clientesRepository.findOne(id);

    if (!clientes) {
      throw new AppError("Cliente não encontrado.");
    }

    clientes.cpf = cpf;
    clientes.rg = rg;
    clientes.nome = nome;
    clientes.telefone = telefone;
    clientes.email = email;

    await clientesRepository.save(clientes);
    return clientes;
  }
}

export default UpdateClienteService;
