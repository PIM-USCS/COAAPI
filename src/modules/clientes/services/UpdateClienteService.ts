import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Clientes from "../typeorm/entities/Clientes";
import { ClienteRepository } from "../typeorm/repositories/ClienteRepository";

interface IRequest {
  cpf: string;
  nome: string;
  telefone: string;
  rua: string;
  cep: string;
  cidade: string;
  bairro: string;
  uf: string;
  numero: string;
}

class UpdateClienteService {
  public async execute({
    cpf,
    nome,
    telefone,
    cep,
    bairro,
    cidade,
    numero,
    rua,
    uf,
  }: IRequest): Promise<Clientes> {
    const clientesRepository = getCustomRepository(ClienteRepository);

    const clientes = await clientesRepository.findOne(cpf);

    if (!clientes) {
      throw new AppError("Cliente não encontrado.");
    }

    // const clienteExists = await clientesRepository.findByID(cpf);

    // if (clienteExists && cpf !== clientes.cpf) {
    //   throw new AppError("Já existe um cliente com este CPF.");
    // }

    clientes.nome = nome;
    clientes.telefone = telefone;
    clientes.cep = cep;
    clientes.rua = rua;
    clientes.cidade = cidade;
    clientes.bairro = bairro;
    clientes.uf = uf;
    clientes.numero = numero;

    await clientesRepository.save(clientes);
    return clientes;
  }
}

export default UpdateClienteService;
