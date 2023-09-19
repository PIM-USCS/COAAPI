import { Request, Response } from "express";
import ListReciboService from "../services/ListReciboService";
import ShowReciboService from "../services/ShowReciboService";
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
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      {
        const { id } = request.params;
        const showRecibo = new ShowReciboService();

        const recibo = await showRecibo.execute({ id });
        return response.json(recibo);
      }
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { data_recibo, cobranca_id, arquivo } = request.body;

      const createRecibo = new CreateReciboService();

      const recibo = await createRecibo.execute({
        data_recibo,
        cobranca_id,
        arquivo,
      });
      return response.json(recibo);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
  //   public async update(request: Request, response: Response): Promise<Response> {
  //     try {
  //       const {
  //         tipo_cliente,
  //         cnpj,
  //         ie,
  //         cpf,
  //         rg,
  //         nome,
  //         cep,
  //         rua,
  //         cidade,
  //         uf,
  //         bairro,
  //         numero,
  //         complemento,
  //         cliente,
  //       } = request.body;

  //       const { id } = request.params;

  //       const updateEmpresa = new UpdateEmpresaService();
  //       const empresa = await updateEmpresa.execute({
  //         id,
  //         tipo_cliente,

  //         cnpj,
  //         ie,
  //         cpf,
  //         rg,
  //         nome,
  //         cep,
  //         rua,
  //         cidade,
  //         uf,
  //         bairro,
  //         numero,
  //         complemento,

  //         cliente,
  //       });

  //       return response.json(empresa);
  //     } catch (error) {
  //       console.error(error);
  //       return response.status(500).json();
  //     }
  //   }
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
