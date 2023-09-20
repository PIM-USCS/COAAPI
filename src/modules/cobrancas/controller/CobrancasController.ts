import { Request, Response } from "express";
import CreateCobrancaService from "../services/CreateCobrancaService";
import DeleteCobrancasService from "../services/DeleteCobrancaService";
import ListCobrancaService from "../services/ListCobrancaService";
import ShowCobrancaService from "../services/ShowCobrancaService";

export default class CobrancasController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const listCobrancas = new ListCobrancaService();

      const cobrancas = await listCobrancas.execute();

      return response.json(cobrancas);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      {
        const { id } = request.params;
        const showCobranca = new ShowCobrancaService();

        const cobranca = await showCobranca.execute({ id });
        return response.json(cobranca);
      }
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { vencimento_cobranca, emissao_cobranca, valor, arquivo, status } =
        request.body;

      const { id_empresa } = request.params;
      const createCobranca = new CreateCobrancaService();

      const cobranca = await createCobranca.execute({
        vencimento_cobranca,
        emissao_cobranca,
        arquivo,
        valor,
        status,
        id_empresa,
      });
      return response.json(cobranca);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const deleteCobranca = new DeleteCobrancasService();
      await deleteCobranca.execute({ id });
    } catch (error) {
      console.error(error);
    }
    return response.json([]);
  }
}
