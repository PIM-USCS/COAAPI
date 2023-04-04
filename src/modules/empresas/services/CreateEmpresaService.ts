import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Empresa from "../typeorm/entities/Empresa";
import { EmpresaRepository } from "../typeorm/repositories/EmpresasRepository";

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
  colaborador: string;
  cliente: string;
}

class CreateEmpresaService {
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
    colaborador,
    cliente,
  }: IRequest): Promise<Empresa> {
    const empresasRepository = getCustomRepository(EmpresaRepository);
    const empresaExistCNPJ = await empresasRepository.findByCNPJ(cnpj);

    if (empresaExistCNPJ) {
      throw new AppError("Já existe um cliente com este CNPJ");
    }

    const empresa = await empresasRepository.create({
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
      colaborador,
      cliente,
    });

    await empresasRepository.save(empresa);
    return empresa;
  }
}

export default CreateEmpresaService;
