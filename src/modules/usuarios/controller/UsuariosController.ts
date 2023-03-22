import { Request, Response } from "express";
import CreateUsuarioService from "../services/CreateUsuarioService";
import ListUsuarioService from "../services/ListUsuarioService";

export default class UsuariosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUsuarios = new ListUsuarioService();

    const usuarios = await listUsuarios.execute();

    return response.json(usuarios);
  }
  //   public async show(request: Request, response: Response): Promise<Response> {
  //   }
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { nome, senha, avatar } = request.body;
      const createUsuario = new CreateUsuarioService();

      const usuarios = await createUsuario.execute({
        nome,
        senha,
        avatar,
      });
      return response.json(usuarios);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
  //   public async update(request: Request, response: Response): Promise<Response> {
  //   }
  //   public async delete(request: Request, response: Response): Promise<Response> {
}
