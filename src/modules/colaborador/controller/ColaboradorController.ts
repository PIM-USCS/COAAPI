import { Request, Response } from "express";

import ListColaboradorService from "../services/ListColaboradorService";
import ShowColaboradorByNameService from "../services/ShowColaboradorByNameService";

import CreateColaboradorService from "../services/CreateColaboradorService";
import DeleteColaboradorService from "../services/DeleteColaboradorService";
import UpdateColaboradorService from "../services/UpdateColaboradorService";
import ShowColaboradorByIDService from "../services/ShowColaboradorByIDService";

export default class ColaboradorController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const listColaborador = new ListColaboradorService();

      const colaborador = await listColaborador.execute();

      return response.json(colaborador);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      {
        const { nome } = request.params;
        const showColaborador = new ShowColaboradorByNameService();

        const colaborador = await showColaborador.execute({ nome });
        return response.json(colaborador);
      }
    } catch (error) {
      console.log(error);
      return response.status(500).json();
    }
  }

  public async showByID(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      {
        const { id } = request.params;
        const showColaborador = new ShowColaboradorByIDService();

        const colaborador = await showColaborador.execute({ id });
        return response.json(colaborador);
      }
    } catch (error) {
      console.log(error);
      return response.status(500).json();
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { nome, telefone } = request.body;

      const { id } = request.params;

      const updateColaborador = new UpdateColaboradorService();
      const colaborador = await updateColaborador.execute({
        id,
        nome,
        telefone,
      });

      return response.json(colaborador);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { nome, telefone } = request.body;
      const createColaborador = new CreateColaboradorService();

      const colaborador = await createColaborador.execute({
        nome,
        telefone,
      });
      return response.json(colaborador);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const deleteColaborador = new DeleteColaboradorService();
      await deleteColaborador.execute({ id });
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
    return response.json([]);
  }
}
