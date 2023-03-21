import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Clientes from "../typeorm/entities/Clientes";
import { ClienteRepository } from "../typeorm/repositories/ClienteRepository";

interface IRequest {
  tipo_cliente: string;
  regime: string;
  cnpj: string;
  ie: string;
  cpf: string;
  rg: string;
  nome: string;
  cep: string;
  rua: string;
  cidade: string;
  uf: string;
  bairro: string;
  numero: string;
  complemento: string;
}

class CreateClienteService {
  public async execute({
    tipo_cliente,
    regime,
    cnpj,
    ie,
    cpf,
    rg,
    nome,
    cep,
    rua,
    cidade,
    uf,
    bairro,
    numero,
    complemento,
  }: IRequest): Promise<Clientes> {
    const clientesRepository = getCustomRepository(ClienteRepository);
    const clienteExistCPF = await clientesRepository.findByCPF(cpf);
    const clienteExistCNPJ = await clientesRepository.findByCPF(cnpj);

    if (clienteExistCPF) {
      throw new AppError("Já existe um cliente com este CPF");
    }

    if (clienteExistCNPJ) {
      throw new AppError("Já existe um cliente com este CNPJ");
    }

    const cliente = await clientesRepository.create({
      tipo_cliente,
      regime,
      cnpj,
      ie,
      cpf,
      rg,
      nome,
      cep,
      rua,
      cidade,
      uf,
      bairro,
      numero,
      complemento,
    });

    await clientesRepository.save(cliente);
    return cliente;
  }
}

export default CreateClienteService;
