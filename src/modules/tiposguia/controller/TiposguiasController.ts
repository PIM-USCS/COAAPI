import { Request, Response } from "express";
import ListTiposguiaService from "../service/ListTiposguiaService";
import ShowTiposguiaService from "../service/ShowTiposguiaService";
import CreateTiposguiaService from "../service/CreateTiposguiaService";
import DeleteTiposguiaService from "../service/DeleteTiposguiaService";
import UpdateTiposguiaService from "../service/UpdateTiposguiaService";

export default class TiposguiaController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const listTiposguia = new ListTiposguiaService();

      const tiposguias = await listTiposguia.execute();

      return response.json(tiposguias);
    } catch (error) {
      return response.status(500).json();
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      {
        const { id } = request.params;
        const showTiposguia = new ShowTiposguiaService();

        const tiposguia = await showTiposguia.execute({ id });
        return response.json(tiposguia);
      }
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { descricao } = request.body;

      const createTiposguia = new CreateTiposguiaService();

      const tiposguia = await createTiposguia.execute({
        descricao,
      });
      return response.json(tiposguia);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const deleteTiposguia = new DeleteTiposguiaService();
      await deleteTiposguia.execute({ id });
    } catch (error) {
      console.error(error);
    }
    return response.json([]);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { descricao } = request.body;

      const { id } = request.params;

      const updateTiposguia = new UpdateTiposguiaService();
      const tiposguia = await updateTiposguia.execute({
        id,
        descricao,
      });

      return response.json(tiposguia);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
}
