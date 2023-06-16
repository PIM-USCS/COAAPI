import { Request, Response } from "express";
import CreateUsuarioService from "../services/CreateUsuarioService";
import ListUsuarioService from "../services/ListUsuarioService";
import ShowUsuarioService from "../services/ShowUsuarioService";

export default class UsuariosController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const listUsuarios = new ListUsuarioService();

      const usuarios = await listUsuarios.execute();

      return response.json(usuarios);
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      {
        const { id } = request.params;
        const showUsuario = new ShowUsuarioService();

        const usuario = await showUsuario.execute({ id });
        return response.json(usuario);
      }
    } catch (error) {
      console.error(error);
      return response.status(500).json();
    }
  }
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { nome, email, senha, avatar } = request.body;
      const createUsuario = new CreateUsuarioService();

      const usuarios = await createUsuario.execute({
        nome,
        email,
        senha,
        avatar,
      });
      return response.json(usuarios);
    } catch (error) {
      console.log(error);
      return response.status(500).json();
    }
  }
  //   public async update(request: Request, response: Response): Promise<Response> {
  //   }
  //   public async delete(request: Request, response: Response): Promise<Response> {
}
