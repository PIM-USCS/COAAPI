import { Request, Response } from "express";
import ListReciboService from "../services/ListReciboService";
import ShowReciboService from "../services/ShowReciboByCobrancaService";
import CreateReciboService from "../services/CreateReciboService";
import DeleteReciboService from "../services/DeleteReciboService";

export default class RecibosController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const listRecibos = new ListReciboService();

      const recibos = await listRecibos.execute();

      return response.json(recibos);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
  public async showByIDCobranca(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      {
        const { cobranca_id } = request.params;
        const showRecibo = new ShowReciboService();

        const recibo = await showRecibo.execute({ cobranca_id });
        return response.json(recibo);
      }
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { arquivo, data_recibo } = request.body;
      const { cobranca_id } = request.params;

      const createRecibo = new CreateReciboService();

      const recibo = await createRecibo.execute({
        arquivo,
        data_recibo,
        cobranca_id,
      });
      return response.json(recibo);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const deleteRecibo = new DeleteReciboService();
      await deleteRecibo.execute({ id });
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
    return response.json([]);
  }
}
