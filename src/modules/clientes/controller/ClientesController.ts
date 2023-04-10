import { Request, Response } from "express";
import CreateClienteService from "../services/CreateClienteService";
import DeleteClienteService from "../services/DeleteClienteService";
import ListClienteService from "../services/ListClienteService";
import ShowClienteService from "../services/ShowClienteService";
import UpdateClienteService from "../services/UpdateClienteService";

export default class ClientesController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const listClientes = new ListClienteService();

      const clientes = await listClientes.execute();

      return response.json(clientes);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      {
        const { id } = request.params;
        const showCliente = new ShowClienteService();

        const cliente = await showCliente.execute({ id });
        return response.json(cliente);
      }
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { cpf, rg, nome, telefone, email, usuario } = request.body;
      const createCliente = new CreateClienteService();

      const cliente = await createCliente.execute({
        cpf,
        rg,
        nome,
        telefone,
        email,
      });
      return response.json(cliente);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { cpf, rg, nome, telefone, email } = request.body;

      const { id } = request.params;

      const updateCliente = new UpdateClienteService();
      const cliente = await updateCliente.execute({
        id,
        cpf,
        rg,
        nome,
        telefone,
        email,
      });

      return response.json(cliente);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const deleteCliente = new DeleteClienteService();
      await deleteCliente.execute({ id });
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
    return response.json([]);
  }
}
