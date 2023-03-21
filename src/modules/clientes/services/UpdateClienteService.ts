import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Clientes from "../typeorm/entities/Clientes";
import { ClienteRepository } from "../typeorm/repositories/ClienteRepository";

interface IRequest {
  id: string;
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

class UpdateClienteService {
  public async execute({
    id,
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

    const clientes = await clientesRepository.findOne(id);

    if (!clientes) {
      throw new AppError("Cliente não encontrado.");
    }

    clientes.tipo_cliente = tipo_cliente;
    clientes.regime = regime;
    clientes.cnpj = cnpj;
    clientes.ie = ie;
    clientes.cpf = cpf;
    clientes.rg = rg;
    clientes.nome = nome;
    clientes.cep = cep;
    clientes.rua = rua;
    clientes.cidade = cidade;
    clientes.uf = uf;
    clientes.bairro = bairro;
    clientes.numero = numero;
    clientes.complemento = complemento;

    await clientesRepository.save(clientes);
    return clientes;
  }
}

export default UpdateClienteService;
