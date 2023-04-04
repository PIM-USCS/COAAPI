import { Request, Response } from "express";
import ListEmpresaService from "../services/ListEmpresaService";
import ShowEmpresaService from "../services/ShowEmpresaService";
import CreateEmpresaService from "../services/CreateEmpresaService";
import UpdateEmpresaService from "../services/UpdateEmpresaService";
import DeleteEmpresaService from "../services/DeleteEmpresaService";

export default class EmpresaController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const listEmpresas = new ListEmpresaService();

      const empresas = await listEmpresas.execute();

      return response.json(empresas);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      {
        const { id } = request.params;
        const showEmpresa = new ShowEmpresaService();

        const empresa = await showEmpresa.execute({ id });
        return response.json(empresa);
      }
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const {
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
      } = request.body;
      const createEmpresa = new CreateEmpresaService();

      const empresa = await createEmpresa.execute({
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
      return response.json(empresa);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const {
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
      } = request.body;

      const { id } = request.params;

      const updateEmpresa = new UpdateEmpresaService();
      const empresa = await updateEmpresa.execute({
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
        colaborador,
        cliente,
      });

      return response.json(empresa);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const deleteEmpresa = new DeleteEmpresaService();
      await deleteEmpresa.execute({ id });
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
    return response.json([]);
  }
}
