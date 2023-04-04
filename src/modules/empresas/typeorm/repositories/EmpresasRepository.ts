import { EntityRepository, Repository } from "typeorm";
import Empresa from "../entities/Empresa";

@EntityRepository(Empresa)
export class EmpresaRepository extends Repository<Empresa> {
  public async findByCNPJ(
    cnpj: string | undefined
  ): Promise<Empresa | undefined> {
    const empresa = this.findOne({ where: { cnpj } });
    return empresa;
  }
}
