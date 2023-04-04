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
  usuario: string;
}

class UpdateClienteService {
  public async execute({
    id,
    cpf,
    rg,
    nome,
    telefone,
    email,
    usuario,
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
    clientes.usuario = usuario;

    await clientesRepository.save(clientes);
    return clientes;
  }
}

export default UpdateClienteService;
