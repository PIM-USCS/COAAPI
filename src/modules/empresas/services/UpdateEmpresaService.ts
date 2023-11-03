import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Empresa from "../typeorm/entities/Empresa";
import { EmpresaRepository } from "../typeorm/repositories/EmpresasRepository";

interface IRequest {
  id: string;
  tipo_cliente: string;
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
  cliente: string;
  ativa: string;
}

class UpdateEmpresaService {
  public async execute({
    id,
    tipo_cliente,
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
    ativa,
    cliente,
  }: IRequest): Promise<Empresa> {
    const empresasRepository = getCustomRepository(EmpresaRepository);

    const empresas = await empresasRepository.findOne(id);

    if (!empresas) {
      throw new AppError("Empresa não encontrada.");
    }

    empresas.tipo_cliente = tipo_cliente;
    empresas.cnpj = cnpj;
    empresas.ie = ie;
    empresas.cpf = cpf;
    empresas.rg = rg;
    empresas.nome = nome;
    empresas.cep = cep;
    empresas.rua = rua;
    empresas.cidade = cidade;
    empresas.uf = uf;
    empresas.bairro = bairro;
    empresas.numero = numero;
    empresas.complemento = complemento;
    empresas.ativa = ativa;
    // empresas.cliente = cliente;

    await empresasRepository.save(empresas);
    return empresas;
  }
}

export default UpdateEmpresaService;
